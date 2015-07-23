chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.message === "clicked_browser_action" ) {
    	console.log('enter');
      $("body,html").css("-webkit-filter", "invert(1)");
      console.log('lol');
    }
  }
);