/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */
const content = `
    <div class="site-title">BackpackPacker</div>
    <div class="site-description">All backpack packing, all the time.</div>
`;

function makeText(element) {
	//create navMenu and internal ul elements, for the list of navigation buttons
	const mainText = document.createElement("header");
	mainText.classList.add("text-entry");

	// set up structure of html to inject
	mainText.innerHTML = element;

	//append html to the end of the siteheader block
	document.querySelector("body").prepend(mainText);
}

makeText(content);

const makeBlueAndCenter = function (element) {
	element.style.color = "blue";
	element.style.justifyContent = "center";
	element.style.display = "grid";
};

makeBlueAndCenter(document.querySelector(".text-entry .site-title"));
makeBlueAndCenter(document.querySelector(".text-entry .site-description"));
