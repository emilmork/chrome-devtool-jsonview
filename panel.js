//Created a port with background page for continous message communication
 var port = chrome.extension.connect({
    name: "Give me name" 
});

//sending console.log to content page so it can be desplayed in console
console.log = function() {
	var args = Array.apply(null, arguments);
	port.postMessage({name : 'log' , data: args});
};

  var container = document.getElementById('jsoneditor');

 var options = {
    mode: 'tree',
    modes: ['code', 'form', 'text', 'tree', 'view'], // allowed modes
    error: function (err) {
      alert(err.toString());
    }
  };

  var json = {
    "array": [1, 2, 3],
    "boolean": true,
    "null": null,
    "number": 123,
    "object": {"a": "b", "c": "d"},
    "string": "Hello World"
  };

  var editor = new jsoneditor.JSONEditor(container, options, json);

//Hanlde response when recieved from background page
port.onMessage.addListener(function (msg) {
    editor.set(msg.data);
});

function postMsg(msg) {
	//Posting message to background page
	port.postMessage(msg);
}

//get details from manifest
details=chrome.app.getDetails();

//show current version
document.getElementById("version").innerHTML	= details.version;

//binding events
document.getElementById("btn-1").onclick		= function(){postMsg('btn-1-msg');};
document.getElementById("btn-2").onclick		= function(){postMsg('btn-2-msg');};
document.getElementById("btn-3").onclick		= function(){postMsg('btn-3-msg');};

//console.log('something');
 
 
