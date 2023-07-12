/**
 * This script creates three books and sees how far done we are with them
 */

import Book from "./Book.js";

const book1 = new Book("Tower of Babel", 432);
book1.moveBookmark(30);

const book2 = new Book("Dune", 603);

const book3 = new Book("Tokyo Ghoul", 97);
book3.moveBookmark(97);

const book4 = new Book("Diary of a Wimpy Kid", 201);
book4.moveBookmark(201);

const book5 = new Book("The Wealth of Nations", 548);

console.log(book1, book1.percentRead());
console.log(book2, book2.percentRead());
console.log(book3, book3.percentRead());
console.log(book4, book4.percentRead());
console.log(book5, book5.percentRead());
