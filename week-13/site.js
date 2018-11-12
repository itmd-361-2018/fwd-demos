// Remove the 'nojs' class and add the 'js' class

var html = document.querySelector('html');
html.classList.remove('nojs');
html.classList.add('js');

// Ultimately, we want to insert this HTML before
// the unordered list in the `<nav>` element:
// <h2><a href="#navigation">Menu</a></h2>

var navigation = document.querySelector('#navigation');
var nav_list = document.querySelector('.nav');

// Build the outer heading element
var nav_heading = document.createElement('h2');
// Build the inner anchor/link element
var menu_link = document.createElement('a');
menu_link.textContent = 'Menu';
menu_link.setAttribute('id','menu-button');
menu_link.setAttribute('href','#null');
menu_link.setAttribute('tabindex', '1');
// Append the menu_link to the heading element
nav_heading.append(menu_link);

// Finally, append the nav_heading to #navigation
navigation.insertBefore(nav_heading,nav_list);

// Listen for clicks on #menu-button and toggle the
// visible class
var menu_button = document.querySelector('#menu-button');
menu_button.addEventListener('click', function(e) {
  nav_list.classList.toggle('visible');
  e.preventDefault();
})
