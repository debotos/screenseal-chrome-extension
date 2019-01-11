/*global chrome*/
import React from 'react';
import Frame, { FrameContextConsumer } from 'react-frame-component';

import App from './App';
import Login from './components/Login';

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
						<App setToken={props.setToken} />
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
		});
	}
	state = {
		token: ''
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
	render() {
		const { token } = this.state;
		if (token) {
			return <MainApp setToken={this.setToken} />;
		} else {
			return <Login setToken={this.setToken} />;
		}
	}
}

export default Extension;
