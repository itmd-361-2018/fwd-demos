'use strict';

(function(){
  if (typeof document.querySelector === 'undefined') {
    // Just exit if run in an incapable browser
    return;
  }

  console.log('Who needs a damn DOM-loaded event?');

  document.addEventListener('DOMContentLoaded', function() {
    // Listen for when the form is submitted
    var form = document.querySelector('#user-info');
    form.addEventListener('submit', function(e) {
      // Let's log the username value to the console
      var username = document.querySelector('#username').value;
      console.log('Someone has entered the username', username);
      // Prevent the default submit behavior
      e.preventDefault();
    });
  });
})();
