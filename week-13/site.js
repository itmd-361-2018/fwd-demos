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
// Append the menu_link to the heading element
nav_heading.append(menu_link);
