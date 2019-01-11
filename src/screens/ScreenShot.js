import React, { Component } from 'react';
import { Button } from 'react-md';

export default class ScreenShot extends Component {
	handleLogout = () => {
		this.props.setToken('', true);
	};
	render() {
		return (
			<div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-end',
						marginRight: '10px'
					}}
				>
					<Button raised secondary onClick={this.handleLogout}>
						Logout
					</Button>
				</div>
				<h1 className=".md-display-4 md-text-center">
					Your Token: <span className="md-font-bold">50</span>
				</h1>
			</div>
		);
	}
}
