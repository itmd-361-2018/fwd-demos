// Basic replacement using vanilla JavaScript + DOM
var heading = document.querySelector('#primary');
heading.innerHTML = 'Hello from Fake jQuery JavaScript';

// Conflict-free IIFE with jQuery
// You MUST load jQuery in your HTML (see jquery.html file)
$.noConflict();
(function($){
  $('#primary').html('Hello from Simple jQuery');
})(jQuery);
