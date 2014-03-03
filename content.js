
window.addEventListener("message", function(event) {

    if(event.data.indexOf("JSON_CONTENT") == -1) return;
     
     try {
     	var json = event.data.split(";")[1];
        json = JSON.parse(json);
        chrome.extension.sendMessage({msg:'show_json',data : json});
     } catch (err) {
        console.log(err);
     }
	  
  
}, false);


function customConsole() {

    window.show = function(tekst) {
        window.postMessage("JSON_CONTENT;"+JSON.stringify(tekst), "*");
    };
}


var script = document.createElement('script');
script.innerHTML = "(" + customConsole + ")()";
(document.body || document.head).appendChild(script);