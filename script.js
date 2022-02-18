const container = document.getElementById('container');
const buttonCard = document.getElementById('buttonCard');
buttonCard.addEventListener('click', checkEmptyCard); 

// array of movie objects
let myWatchlist = [];

// movie object constructor
function Movie(title, director, Rating) {
  this.title = title;
  this.director = director;
  this.Rating = Rating;
}

function checkEmptyCard() {
  if (document.getElementsByClassName("newCard").length == 0) {
    createCardForm();
  }
  else {
    buttonCard.className = 'error';
  }
}


function createCardForm() {  
  const newCard = document.createElement('div');
  const newTitleInput = document.createElement('textarea');
  const newDirectorInput = document.createElement('textarea');
  const newRatingInput = document.createElement('input');
  const newTitle = document.createElement('div');
  const newDirector = document.createElement('div');
  const newRating = document.createElement('div');
  const newCardActions = document.createElement('div');
  const newEye = document.createElement('i');
  const newCheck = document.createElement('i');
  const newX = document.createElement('i');

  newEye.addEventListener('click', watched);
  newCheck.addEventListener('click', addMovie);
  newX.addEventListener('click', removeMovie);

  newCard.className = 'newCard';
  newTitleInput.className = 'title';
  newDirectorInput.className = 'cardContent director';
  newRatingInput.className = 'cardContent Rating';
  newTitle.className = 'title';
  newDirector.className = 'cardContent director';
  newRating.className = 'cardContent Rating';
  
  newRatingInput.setAttribute('type','number');
  newRatingInput.setAttribute('min', '1');
  newRatingInput.setAttribute('max', '5');
  
  newTitleInput.id = 'title';
  newDirectorInput.id = 'director';
  newRatingInput.id = 'Rating';
  newTitleInput.placeholder = 'Title';
  newDirectorInput.placeholder = 'Director';
  newRatingInput.placeholder = 'Rating';
  newRatingInput.setAttribute("required","");
  
  newCardActions.className = 'cardActions';
  newEye.className = 'fa-solid fa-eye';
  newCheck.className = 'fa-solid fa-check fa-lg';
  newX.className = 'fa-solid fa-x';

  container.insertBefore(newCard, buttonCard);
  newCard.append(newTitleInput);
  newCard.append(newDirectorInput);
  newCard.append(newRatingInput);
  newCard.append(newCardActions);
  newCardActions.append(newEye);
  newCardActions.append(newCheck);
  newCardActions.append(newX);

  function watched() {
    newEye.classList.toggle('watched');
  }

  function removeMovie() {
    newCard.remove();
    buttonCard.className = 'card';
  }

  function addMovie() {
    function checkEmptyTitle() {
      if (document.getElementById('title').value == "") {
        document.getElementById('title').style.borderStyle = "solid";
        document.getElementById('title').style.borderColor = "red";
      }
      else {
        document.getElementById('title').style.borderStyle = "dotted";
        document.getElementById('title').style.borderColor = "gray";
        if(document.getElementById('Rating').value == '' || document.getElementById('Rating').value < 1) {
          document.getElementById('Rating').value = 1;
        }
        else if(document.getElementById('Rating').value > 5) {
          document.getElementById('Rating').value = 5;
        }
        let newMovie = new Movie(document.getElementById('title').value, document.getElementById('director').value, document.getElementById('Rating').value);
        myWatchlist.push(newMovie);
        newCheck.removeEventListener('click',addMovie);
        finalizeCard();
      }
    }
    checkEmptyTitle(); 
  }

  function finalizeCard() {
    newTitleInput.remove();
    newDirectorInput.remove();
    newRatingInput.remove();
    newCardActions.remove();
  
    newTitle.innerHTML = myWatchlist[myWatchlist.length - 1].title;
    newDirector.innerHTML = myWatchlist[myWatchlist.length - 1].director;
    newRating.innerHTML = '<i class="fa-solid fa-star fa-lg"></i>'.repeat(myWatchlist[myWatchlist.length - 1].Rating);
  
    newCard.className = 'card';
    newCard.append(newTitle);
    newCard.append(newDirector);
    newCard.append(newRating);
    newCard.append(newCardActions);
    buttonCard.className = 'card';
  }
}