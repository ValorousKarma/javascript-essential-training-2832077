/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */
// html for the navigation menu
const content = `
    <li><a href="#">Home</a></li>
    <li><a href="#">Articles</a></li>
    <li><a href="#">About</a></li>
`;

//create navMenu and internal ul elements, for the list of navigation buttons
const mainNav = document.createElement("navMenu");
mainNav.classList.add("navigation-menu");
const navList = document.createElement("ul");

// set up structure of html to inject
navList.innerHTML = content;
mainNav.append(navList);

//append html to the end of the siteheader block
document.querySelector(".siteheader").append(mainNav);
