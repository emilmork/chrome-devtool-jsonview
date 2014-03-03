
//Handle request from devtools   
chrome.extension.onConnect.addListener(function (port) {
    port.onMessage.addListener(function (message) {
		//Request a tab for sending needed information
		chrome.tabs.getSelected(null, function(tab) {
			chrome.tabs.sendMessage(tab.id, message, function(response) {});
		});
	});
	//handle message from content.js
	chrome.extension.onMessage.addListener(function (message, sender, response) {
		if(message.msg === 'show_json') {
			port.postMessage(message);
		}
	});



});	


