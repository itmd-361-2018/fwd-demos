// Use IIFE (Immediately Invoked Function Expression)
// See https://developer.mozilla.org/en-US/docs/Glossary/IIFE
(function(){
  // First, make sure we're dealing with an A-grade browser
  if (typeof(document.querySelector)==="undefined") {
    // if document.querySelector is undefined, then just
    // return and get out
    return;
  }

  // Now we can get down to business and write modern
  // unobtrusive JavaScript...

  document.addEventListener('DOMContentLoaded', function() {
    // Pretty much all of our page's JavaScript that works
    // on the DOM will be written in here...

    // Add a js class on the <html> element...
    document.querySelector('html').className = 'js';

    // Select and replace the contents of #heading
    var heading = document.querySelector('#header');
    heading.innerHTML = "<a href='#content'>Click to Show Content</a>";

    // Show content...

    // Listen for click events on the heading...
    heading.addEventListener('click', function() {
      var content = document.querySelector('#content');
      // When it's clicked, toggle a 'visible' class to our
      // #content element
      // See https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
      content.classList.toggle('visible');
    });

  });


})();
