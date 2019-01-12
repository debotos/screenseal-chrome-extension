import React, { Component } from 'react';
import { Button, FontIcon } from 'react-md';
import ScreenShotActions from '../components/ScreenShotActions';

export default class ScreenShot extends Component {
	handleLogout = () => {
		this.props.setToken('', true);
	};
	render() {
		let { user } = this.props;
		// let { credit } = user;
		return (
			<div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-end',
						marginRight: '10px'
					}}
				>
					<Button
						raised
						secondary
						iconBefore={false}
						onClick={this.handleLogout}
						iconEl={<FontIcon>redo</FontIcon>}
					>
						Logout
					</Button>
				</div>
				<h1
					className="md-display-3 md-text-center"
					style={{ marginTop: '30%' }}
				>
					Your Token: <span className="md-font-bold">50</span>
				</h1>

				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						flexDirection: 'column'
					}}
				>
					<ScreenShotActions />
				</div>
			</div>
		);
	}
}
