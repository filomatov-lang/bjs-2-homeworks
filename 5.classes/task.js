class PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state = 100, type = null) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = state;
		this.type = type;
	}

	fix() {
		return this.state = this.state * 1.5;
	}

	get state() {
		return this._state;
	}

	set state(newState) {
		if (newState < 0) {
			return this._state = 0;
		} else if (newState > 100) {
			return this._state = 100;
		}
		return this._state = newState;
	}
}

class Magazine extends PrintEditionItem {
	type = 'magazine';
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount, state) {
		super(name, releaseDate, pagesCount, state);
		this.author = author;
		this.type = 'book';
	}
}

class NovelBook extends Book {
	type = 'novel';
}

class FantasticBook extends Book {
	type = 'fantastic';
}

class DetectiveBook extends Book {
	type = 'detective';
}

//Задание №2
class Library {
	constructor(name, books) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (this.books.find(item => item === book) === undefined && book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type = 'name', value = 'Введите имя') {
		let book = this.books.find(book => book[type] === value);
		return book === undefined ? null : book;
	}

	giveBookByName(bookName) {
		let book = this.books.find(book => book.name === bookName);

		if (!book) {
			return null;
		}

		this.books.splice(this.books.indexOf(book), 1);
		return book;
	}
}

const library = new Library('Российская государственная библиотека');
library.addBook(
	new FantasticBook(
		'Аркадий и Борис Стругацкие',
		'Пикник на обочине',
		1972,
		168
	)
);

library.addBook(
	new FantasticBook(
		'Аркадий и Борис Стругацкие',
		'Понедельник начинается в субботу',
		1965,
		320
	)
);

library.addBook(
	new DetectiveBook(
		'Агата Кристи',
		'Десять нигритят',
		1939,
		138)
);

library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log('Наличие книги в библиотеке: ' + JSON.stringify(library.findBookBy('releaseDate', 1919)));

library.addBook(
	new NovelBook(
		'Иенсен И.',
		'Гиммерландские рассказы. Выпуск №25',
		1919,
		106
	)
);

console.log('Наличие книги в библиотеке: ' + JSON.stringify(library.findBookBy('releaseDate', 1919)));
console.log('Наличие книги в библиотеке: ' + JSON.stringify(library.findBookBy('name', 'Понедельник начинается в субботу')));
console.log(library.findBookBy('name', 'Понедельник начинается в субботу').state = 0);
console.log(library.findBookBy('name', 'Понедельник начинается в субботу').state = 50);
console.log(library.findBookBy('name', 'Понедельник начинается в субботу').fix());
console.log("Количество книг до выдачи: " + library.books.length);
let bookMondayStartsOnSaturday = library.giveBookByName('Понедельник начинается в субботу');
console.log("Количество книг после выдачи: " + library.books.length);
console.log('Выданная книга: ' + JSON.stringify(bookMondayStartsOnSaturday));
console.log('Наличие книги в библиотеке: ' + library.findBookBy('name', 'Понедельник начинается в субботу'));
library.addBook(bookMondayStartsOnSaturday);
console.log("Количество книг после добавления: " + library.books.length);


//Задание №3
class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}

	addMark(mark, subjectName) {
		if (mark < 2 || mark > 5) {
			return
		}
		if (!this.marks?.[subjectName]) {
			this.marks[subjectName] = [];
		}
		this.marks[subjectName].push(mark);
	}

	getAverageBySubject(subjectName) {
		if (!this.marks?.[subjectName]) {
			return 0;
		}
		let averageSub = this.marks[subjectName].reduce((sum, mark) => sum + mark / this.marks[subjectName].length, 0);
		return +averageSub.toFixed(2);
	}

	getAverage() {
		if (Object.keys(this.marks).length === 0) {
			return 0;
		}

		let subjectNameArray = Object.keys(this.marks);
		let average = subjectNameArray.reduce((sum, item) => sum + this.getAverageBySubject(item), 0);

		return +(average / subjectNameArray.length).toFixed(2);
	}
}