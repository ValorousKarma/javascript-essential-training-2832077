/**
 * This class defines the object type book
 */

const Book = class {
	constructor(title, pages) {
		this.title = title;
		this.pages = pages;
		this.bookmarkLocation = 0;
	}

	moveBookmark(page) {
		this.bookmarkLocation = page;
	}

	percentRead() {
		let returnValue = (this.bookmarkLocation / this.pages) * 100;
		return returnValue + "%";
	}
};

export default Book;
