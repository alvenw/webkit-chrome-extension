chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.message === "clicked_browser_action" ) {
    	if ($("html").css("-webkit-filter") === "invert(1)") {
    		console.log('hi');
    		$("html").css("-webkit-filter", "invert(0)");
    	} else {
      	$("html").css("-webkit-filter", "invert(1)");
      }
    }
  }
);