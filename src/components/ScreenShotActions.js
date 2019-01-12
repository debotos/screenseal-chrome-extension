import React, { Component } from 'react';
import { SelectField, Button, FontIcon } from 'react-md';

const FORMAT_OPTIONS = [
	{
		label: 'PNG',
		value: 'png'
	},
	{
		label: 'JPG',
		value: 'jpg'
	},
	{
		label: 'PDF',
		value: 'pdf'
	}
];

const PORTION_OPTIONS = [
	{
		label: 'FULL PAGE',
		value: 'full'
	},
	{
		label: 'VISIBLE AREA',
		value: 'partial'
	}
];

export default class ScreenShotActions extends Component {
	state = { format: 'png', portion: 'full' };

	handleFormatChange = (value, index, event, details) => {
		// eslint-disable-line no-unused-vars
		this.setState({ format: value });
	};

	handlePortionChange = (value, index, event, details) => {
		// eslint-disable-line no-unused-vars
		this.setState({ portion: value });
	};

	handleCaptureScreen = e => {
		e.preventDefault();
		console.log(this.state);
	};

	render() {
		let { format, portion } = this.state;
		return (
			<React.Fragment>
				<h1
					className="md-title md-text-center"
					style={{ margin: 0, padding: 0 }}
				>
					Save As
				</h1>
				<SelectField
					id="format"
					placeholder="Save As"
					className="md-cell"
					menuItems={FORMAT_OPTIONS}
					position={SelectField.Positions.BELOW}
					itemLabel="label"
					itemValue="value"
					value={format}
					onChange={this.handleFormatChange}
				/>
				<h1
					className="md-title md-text-center"
					style={{ margin: 0, padding: 0 }}
				>
					Screenshot Type
				</h1>
				<SelectField
					id="portion"
					placeholder="Screenshot Type"
					className="md-cell"
					menuItems={PORTION_OPTIONS}
					position={SelectField.Positions.BELOW}
					itemLabel="label"
					itemValue="value"
					value={portion}
					onChange={this.handlePortionChange}
				/>
				<Button
					flat
					primary
					swapTheming
					iconBefore={false}
					iconEl={<FontIcon>camera</FontIcon>}
					type="submit"
					onClick={this.handleCaptureScreen}
				>
					Capture
				</Button>
			</React.Fragment>
		);
	}
}
