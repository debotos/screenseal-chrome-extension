import React, { Component } from 'react';

import './App.css';
import ScreenShot from './screens/ScreenShot';

class App extends Component {
	render() {
		return (
			<div>
				<ScreenShot user={this.props.user} setToken={this.props.setToken} />
			</div>
		);
	}
}

export default App;
