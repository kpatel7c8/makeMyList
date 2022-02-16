const container = document.getElementById('container');
const buttonCard = document.getElementById('buttonCard');
buttonCard.addEventListener('click', addCard);

function addCard() {
  const newCard = document.createElement('div');
  const newTitle = document.createElement('div');
  const newDirector = document.createElement('div');
  const newYear = document.createElement('div');
  const newCardActions = document.createElement('div');
  const newEye = document.createElement('i');
  const newCheck = document.createElement('i');
  const newX = document.createElement('i');

  newCard.className = 'newCard';
  newTitle.className = 'title';
  newDirector.className = 'cardContent director';
  newYear.className = 'cardContent year';
  newCardActions.className = 'cardActions';
  newEye.className = 'fa-solid fa-eye';
  newCheck.className = 'fa-solid fa-check fa-lg';
  newX.className = 'fa-solid fa-x';

  newTitle.innerHTML = 'Title';
  newDirector.innerHTML = 'Director';
  newYear.innerHTML = 'Year';

  container.insertBefore(newCard, buttonCard);
  newCard.append(newTitle);
  newCard.append(newDirector);
  newCard.append(newYear);
  newCard.append(newCardActions);
  newCardActions.append(newEye);
  newCardActions.append(newCheck);
  newCardActions.append(newX);
}


////////////////////////////////////////////////


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