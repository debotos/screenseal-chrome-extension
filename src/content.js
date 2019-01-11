/*global chrome*/
/* src/content.js */
import React from 'react';
import ReactDOM from 'react-dom';
import Frame, { FrameContextConsumer } from 'react-frame-component';

import App from './App';
import './content.css';

const jsx = <App />;

class Main extends React.Component {
	render() {
		return (
			<Frame
				head={[
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
				]}
			>
				<FrameContextConsumer>
					{// Callback is invoked with iframe's window and document instances
					({ document, window }) => {
						// Render Children
						return <div className={'my-extension'}>{jsx}</div>;
					}}
				</FrameContextConsumer>
			</Frame>
		);
	}
}

const app = document.createElement('div');
app.id = 'my-extension-root';

document.body.appendChild(app);
ReactDOM.render(<Main />, app);

app.style.display = 'none';

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.message === 'clicked_browser_action') {
		toggle();
	}
});

function toggle() {
	if (app.style.display === 'none') {
		app.style.display = 'block';
	} else {
		app.style.display = 'none';
	}
}
