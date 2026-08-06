// Задание №1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }

    fix() {return this.state = this.state * 1.5;}
    
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
        let averageSub = this.marks[subjectName].reduce((sum, mark) => sum + mark / this.marks[subjectName].length , 0);
        return +averageSub.toFixed(2);
    }

    getAverage() {
        if(Object.keys(this.marks).length === 0) {
            return 0;
        }

        let subjectNameArray = Object.keys(this.marks);
        let average = subjectNameArray.reduce((sum, item) => sum + this.getAverageBySubject(item), 0);

        return +(average / subjectNameArray.length).toFixed(2);
    }
}