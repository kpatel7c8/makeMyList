const buttonCard = document.getElementById('buttonCard');
const container = document.getElementById('container');

const newCard = document.createElement('div');
newCard.className = 'card'; 

buttonCard.addEventListener('click', addCard);

function addCard() {
  //document.getElementById('title1').innerHTML = 'Gangs of New York';
  container.append(newCard);
  console.log('hiiooo');
}

const Othello = new Book('Othello', 'Shakespeare', 221, 'read');
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
const myLib = document.getElementById('myLib');

let myLibrary = [];
myLibrary.push(Othello);
myLibrary.push(theHobbit);

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  while (prompt("Do you want to add a book?") == 'yes') {
    let theTitle = prompt('What is the title of the book?');
    let theAuthor = prompt('Who is the author of the book?');
    let numberOfPages = prompt('How many pages are in the book?');
    let readYet = prompt('Have you read the book?');
    const newBook = new Book(theTitle, theAuthor, numberOfPages, readYet);
    myLibrary.push(newBook);
  }
  return myLibrary;
}

//addBookToLibrary();
//myLib.innerHTML = myLibrary[0].author;