/*global chrome*/
/* src/content.js */
// This file is the entry point for Extension
import React from 'react';
import ReactDOM from 'react-dom';

import Extension from './Extension';

import './content.css';

const app = document.createElement('div');
app.id = 'my-extension-root';

document.body.appendChild(app);
ReactDOM.render(<Extension />, app);

app.style.display = 'none';

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.message === 'clicked_browser_action') {
		toggle();
	}
});

function toggle() {
	if (app.style.display === 'none') {
		if (navigator.onLine) {
			app.style.display = 'block';
		} else {
			alert(
				'Offline!\nPlease go Online!\nSome features required active internet!'
			);
		}
	} else {
		app.style.display = 'none';
	}
}
