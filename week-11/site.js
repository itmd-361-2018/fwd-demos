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
      // When it's clicked, add a 'visible' class to our
      // #content element
      var content = document.querySelector('#content');
      // Create an array of classes
      var classes = content.className.split(' ');
      // Set the default visible_class; assume we're going
      // to have to add it
      var visible_class = 'visible';

      // Check for our visible class...
      if (classes.includes(visible_class)){
        // If it exists in the array, remove it...
        // Use Array.prototype.filter to remove the visible class
        // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
        classes = classes.filter(function(c) {
          // Preserve each class whose value isn't 'visible'
          return c !== visible_class;
        });
      } else {
        // Otherwise, add 'visible' onto the classes array
        classes.push(visible_class);
      }
      // Finally, the className to the joined array of classes; separate each by a space
      content.className = classes.join(" ");
    });

  });


})();
