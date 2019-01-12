/*global chrome*/
import React from 'react';
import Frame, { FrameContextConsumer } from 'react-frame-component';
import axios from 'axios';

import App from './App';
import Login from './components/Login';
import { api_user_details_url } from './config/api_urls';

const extension_static_files = [
	<link
		type="text/css"
		rel="stylesheet"
		href={chrome.runtime.getURL('/static/css/content.css')}
	/>,
	<link
		href="https://fonts.googleapis.com/icon?family=Material+Icons"
		rel="stylesheet"
	/>,
	<link
		href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
		rel="stylesheet"
	/>
];

const MainApp = props => (
	<Frame head={extension_static_files}>
		<FrameContextConsumer>
			{// Callback is invoked with iframe's window and document instances
			({ document, window }) => {
				// Render Children
				return (
					<div className={'my-extension'}>
						<App user={props.user} setToken={props.setToken} />
					</div>
				);
			}}
		</FrameContextConsumer>
	</Frame>
);

class Extension extends React.Component {
	componentWillMount() {
		chrome.storage.sync.get(['token'], result => {
			this.setToken(result.token);
			if (result.token) {
				this.geUserInfo(result.token);
			}
		});
	}
	geUserInfo = async token => {
		let config = {
			headers: { Authorization: `Token ${token}` }
		};
		let { data } = await axios.get(api_user_details_url, config);
		let { user } = data;
		// console.log('User logged in getting info ', user);
		this.setState({ user });
	};
	state = {
		token: '',
		user: null
	};
	setToken = (token, save = false) => {
		if (save) {
			chrome.storage.sync.set({ token }, () => {
				this.setState({ token });
			});
		} else {
			console.log('User is already Authenticated!');
			this.setState({ token });
		}
	};
	setUser = user => {
		this.setState({ user });
	};
	render() {
		const { token, user } = this.state;
		if (token) {
			return <MainApp user={user} setToken={this.setToken} />;
		} else {
			return <Login setUser={this.setUser} setToken={this.setToken} />;
		}
	}
}

export default Extension;
