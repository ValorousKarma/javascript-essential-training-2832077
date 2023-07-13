// Create an array of desk items
let deskItems = [
	"Lego Bonsai",
	"Grimmace",
	"Iphone",
	"Glasses",
	"Nintendo Switch",
];
console.log(deskItems.join(", "));

// Remove the last item
deskItems.pop();
console.log(deskItems.join(", "));

// move last item to first
deskItems.unshift(deskItems.pop());
console.log(deskItems.join(", "));

// sort alphabetically
deskItems.sort();
console.log(deskItems.join(", "));

// find a specific item
let itemSearch = deskItems.find(function (item) {
	if (item == "Iphone") {
		return true;
	} else {
		return false;
	}
});
console.log(itemSearch);

// remove specific content from array
let index = deskItems.indexOf("Glasses");
deskItems[index] = undefined;
for (let i = index; i < deskItems.length; i++) {
	deskItems[i] = deskItems[i + 1];
}
deskItems.pop();
console.log(deskItems.join(", "));
