/* create custom css */
var thecss = document.createElement('link');
thecss.href =  chrome.extension.getURL('ui/css/ixio.min.css');
thecss.rel = 'stylesheet';
head = document.getElementsByTagName ("head")[0] || document.documentElement;

/* create custom js */
var thejs = document.createElement('script');
thejs.src = chrome.extension.getURL('ui/js/libs.min.js');
thejs.onload = function() {
    this.parentNode.removeChild(this);
};

/* inject modifications */
head.insertBefore(thecss, head.firstChild);
head.insertBefore(thejs, head.firstChild);