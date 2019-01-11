/*global chrome*/
import React, { Component } from 'react';
import { TextField, FontIcon } from 'react-md';
import { Button } from 'react-md';
import axios from 'axios';

import { api_login_url } from '../config/api_urls';

export default class Login extends Component {
	handleLogin = event => {
		event.preventDefault();
		this.setState({ error: false });
		this.setState({ success: false });
		// console.log(this.state);
		axios
			.post(api_login_url, this.state)
			.then(({ data }) => {
				if (data.success) {
					chrome.storage.sync.set({ token: data.token }, () => {
						console.log('Authentication Success!');
						this.setState({ success: true });
						this.setState({ email: '', password: '' });
						setTimeout(() => {
							this.props.setToken(data.token, true);
						}, 2000);
					});
				}
			})
			.catch(err => {
				this.setState({ error: true });
				setTimeout(() => {
					this.setState({ error: false });
				}, 3000);
			});
	};

	onEmailChange = value => {
		this.setState({ email: value });
	};

	onPasswordChange = value => {
		this.setState({ password: value });
	};

	state = {
		email: '',
		password: '',
		error: false,
		success: false
	};

	render() {
		let { email, password, success, error } = this.state;
		return (
			<div>
				<form
					style={{ textAlign: 'center', padding: '10px' }}
					onSubmit={this.handleLogin}
				>
					{error && (
						<p
							className="md-title"
							style={{ color: '#EF5350', margin: 0, padding: 0 }}
						>
							Invalid Credentials!
						</p>
					)}
					{success && (
						<p
							className="md-title"
							style={{ color: '#388E3C', margin: 0, padding: 0 }}
						>
							Authentication Success!
							<br />
							Redirecting...
						</p>
					)}
					<TextField
						name="email"
						id="email"
						label="Enter your email"
						type="email"
						leftIcon={<FontIcon>email</FontIcon>}
						className="md-cell"
						required
						value={email}
						onChange={this.onEmailChange}
					/>
					<TextField
						name="password"
						id="password"
						label="Enter your password"
						type="password"
						leftIcon={<FontIcon>lock</FontIcon>}
						className="md-cell"
						required
						value={password}
						onChange={this.onPasswordChange}
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
