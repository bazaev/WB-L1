class Book {
	#name;
	#author;
	#year;

	set name(name) {
		this.#name = name
	}

	set author(author) {
		this.#author = author
	}

	set year(year) {
		this.#year = year
	}

	get name() {
		return this.#name
	}

	get author() {
		return this.#author
	}

	get year() {
		return this.#year
	}
}

class BookV2 {
	#name;
	#author;
	#year;

	setName(name) {
		this.#name = name
	}

	setAuthor(author) {
		this.#author = author
	}

	setYear(year) {
		this.#year = year
	}

	getName() {
		return this.#name
	}

	getAuthor() {
		return this.#author
	}

	getYear() {
		return this.#year
	}
}

function BookV3() {
	this.name = "";
	this.author = "";
	this.year = 0;

	this.setName = function (name) {
		this.name = name
	}

	this.setAuthor = function (author) {
		this.author = author
	}

	this.setYear = function (year) {
		this.year = year
	}

	this.getName = function () {
		return this.name
	}

	this.getAuthor = function () {
		return this.author
	}
	
	this.getYear = function () {
		return this.year
	}
}

function BookV4() {
	this.name = "";
	this.author = "";
	this.year = 0;
}

BookV4.prototype.setName = function (name) {
	this.name = name
}

BookV4.prototype.setAuthor = function (author) {
	this.author = author
}

BookV4.prototype.setYear = function (year) {
	this.year = year
}

BookV4.prototype.getName = function () {
	return this.name
}

BookV4.prototype.getAuthor = function () {
	return this.author
}

BookV4.prototype.getYear = function () {
	return this.year
}

const BookV5 = {
	name: "",
	author: "",
	year: 0,

	setName: function (name) {
		this.name = name
	},

	setAuthor: function (author) {
		this.author = author
	},

	setYear: function (year) {
		this.year = year
	},

	getName: function () {
		return this.name
	},

	getAuthor: function () {
		return this.author
	},
	
	getYear: function () {
		return this.year
	}
}


const book1 = new Book();
const book2 = new BookV2();
const book3 = new BookV3();
const book4 = new BookV4();
const book5 = BookV5;

book1.author = "authorName";
book2.setAuthor("authorName2");
book3.setAuthor("authorName3");
book4.setAuthor("authorName4");
book5.setAuthor("authorName5");

console.log(book1.author);
console.log(book2.getAuthor());
console.log(book3.getAuthor());
console.log(book4.getAuthor());
console.log(book5.getAuthor());
