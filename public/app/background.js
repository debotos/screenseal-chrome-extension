// Called when the user clicks on the browser action
chrome.browserAction.onClicked.addListener(function(tab) {
	// Send a message to the active tab
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
		var activeTab = tabs[0];
		chrome.tabs.sendMessage(
			// sending that extension started
			activeTab.id,
			{
				message: 'clicked_browser_action'
			}
		);
	});
});

var data = '';
var container = document.createElement('canvas');

var saveScreenshot = function() {
	var image = new Image();
	image.onload = function() {
		var canvas = container;
		canvas.width = image.width;
		canvas.height = image.height;
		var context = canvas.getContext('2d');
		context.drawImage(image, 0, 0);

		// save the image
		var link = document.createElement('a');
		link.download = 'download.png';
		link.href = container.toDataURL();
		link.click();
		data = '';
	};
	image.src = data;
};

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.action == 'capture') {
		data = '';
		chrome.tabs.captureVisibleTab(
			null,
			{
				format: 'png',
				quality: 100
			},
			content => {
				dataRes = content;
				data = content;
				saveScreenshot();
			}
		);
		sendResponse({ request });
	}
});
