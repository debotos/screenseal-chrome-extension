import React, { Component } from 'react';
import { TextField, FontIcon } from 'react-md';
import { Button } from 'react-md';

export default class Login extends Component {
	render() {
		return (
			<div>
				<form style={{ textAlign: 'center', padding: '10px' }}>
					<TextField
						id="email"
						label="Enter your email"
						type="email"
						leftIcon={<FontIcon>email</FontIcon>}
						className="md-cell"
						required
					/>
					<TextField
						id="password"
						label="Enter your password"
						type="password"
						leftIcon={<FontIcon>lock</FontIcon>}
						className="md-cell"
						required
					/>
					<Button
						flat
						primary
						swapTheming
						iconBefore={false}
						iconEl={<FontIcon>done</FontIcon>}
						type="submit"
					>
						Login
					</Button>
				</form>
			</div>
		);
	}
}
