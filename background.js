// chrome.browserAction.onClicked.addListener(function(tab) {
//   // Send a message to the active tab
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     var activeTab = tabs[0];
//     chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
//   });
// });


function click(e) {
	console.log('asw');
  chrome.tabs.executeScript(null,
      {code:"document.style.-webkit-filter=" + e.target.id + ""});
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var button = document.querySelectorAll('button');
  for (var i = 0; i < button.length; i++) {
    button[i].addEventListener('click', click);
  }
});