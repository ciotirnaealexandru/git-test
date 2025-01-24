### DOM Manipulation Cheat Sheet

## METHODS

# Query selectors
element.querySelector(selector) - returns a reference to the first match of selector.

element.querySelectorAll(selectors) - returns a “NodeList” containing references to all of the matches of the selectors.

# Element creation
document.createElement(tagName, [options]) - creates a new element of tag type tagName. [options] in this case means you can add some optional parameters to the function

# Append elements
parentNode.appendChild(childNode) - appends childNode as the last child of parentNode.

parentNode.insertBefore(newNode, referenceNode) - inserts newNode into parentNode before referenceNode.

# Remove elements
parentNode.removeChild(child) - removes child from parentNode on the DOM and returns a reference to child.

# Editing attributes
// if id exists, update it to 'theDiv', else create an id with value "theDiv"
div.setAttribute("id", "theDiv");

// returns value of specified attribute, in this case "theDiv"
div.getAttribute("id");

// removes specified attribute
div.removeAttribute("id");

# Working with classes
// adds class "new" to your new div
div.classList.add("new");

// removes "new" class from div
div.classList.remove("new");

// if div doesn't have class "active" then add it, or if it does, then remove it
div.classList.toggle("active");

# Adding text content (PREFERED)
// creates a text node containing "Hello World!" and inserts it in div
div.textContent = "Hello World!";

# Adding HTML content (NOT PREFERED)
// renders the HTML inside div
div.innerHTML = "<span>Hello World!</span>";

# Adding inline style

// adds the indicated style rule to the element in the div variable
div.style.color = "blue";

// adds several style rules
div.style.cssText = "color: blue; background: white;";


!! for kebab-case 

// dot notation with camelCase: works, accesses the div's background-color style
div.style.backgroundColor;

// bracket notation with kebab-case: also works
div.style["background-color"];


## EVENTS

#