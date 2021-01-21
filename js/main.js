// JS Slider : 

// Get Slider | Array from[ES6] 
let sliderImg = Array.from(document.querySelectorAll('.slider-container img'));

// let sliderimg = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "03.jpg"];

// Get Number of Sliders
let slidCount = sliderImg.length;

// Set the Current slide
let currentSlide = 1;

// Number Slide Element 
let slideNumb = document.getElementById("slide-number");

// Prev and Next buttons
let nextBut = document.getElementById("next");
let prevBut = document.getElementById("prev");

// Handle Click on Prev and Next but
nextBut.onclick = () => {
  clearInterval(interval)
  nextSlide();
}
prevBut.onclick = () => {
  clearInterval(interval)
  prevSlide()
}

// Pagination List:

//Creat The Main UL
let paginationElement = document.createElement("ul");

//set ID on Ul
paginationElement.setAttribute('id', 'pagination-ul');

//Creat Li based on count | loop
for (var i = 1; i <= slidCount; i++) {

  // Creat Li
  let paginationItem = document.createElement("li");

  // Set custom Attribute
  paginationItem.setAttribute('data-index', i);

  // Set Item Content
  paginationItem.appendChild(document.createTextNode(i));

  // append Items To UL
  paginationElement.appendChild(paginationItem);

}

// add the created UL element to the page
document.getElementById("indicators").appendChild(paginationElement);

// Get the New Created Ul:
let paginationCreatedUL = document.getElementById('pagination-ul');

// Get pagination's Array
let paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// Loop thought All bullets Items
for (let i = 0; i < paginationBullets.length; i++) {

  paginationBullets[i].onclick = function () {

    currentSlide = parseInt(this.getAttribute('data-index'));

    theChecker();
  }

}

// Trigger the Checker Func
theChecker();

// Next Slide Func
function nextSlide() {

  if (nextBut.classList.contains('disabled')) {

    return false;

  } else {

    currentSlide++;

  }

  theChecker();

}

// Prev Slide Func
function prevSlide() {

  if (prevBut.classList.contains('disabled')) {

    return false;

  } else {

    currentSlide--;

  }

  theChecker();

}

let interval = setInterval(() => {
  currentSlide++;

  // Set Number of Slides
  slideNumb.textContent = 'Slide #' + currentSlide + ' of ' + slidCount;

  // remove ALl active class Lists 
  removeActive();


  // Set active class on Current Slide
  sliderImg[currentSlide - 1].classList.add('active');

  // set active class on Current Pagination
  paginationCreatedUL.children[currentSlide - 1].classList.add('active');

  // Check if the Current is the First
  if (currentSlide == 1) {
    prevBut.classList.add('disabled')
  } else {
    prevBut.classList.remove('disabled')
  }

  // Check if the Current is the Last
  if (currentSlide == slidCount) {
    nextBut.classList.add('disabled')
    currentSlide = 0;
  } else {
    nextBut.classList.remove('disabled')
  }

}, 4000)

// Creat The Checker Function
function theChecker() {

  // Set Number of Slides
  slideNumb.textContent = 'Slide #' + currentSlide + ' of ' + slidCount;

  // remove ALl active class Lists 
  removeActive();


  // Set active class on Current Slide
  sliderImg[currentSlide - 1].classList.add('active');

  // set active class on Current Pagination
  paginationCreatedUL.children[currentSlide - 1].classList.add('active');

  // Check if the Current is the First
  if (currentSlide == 1) {
    prevBut.classList.add('disabled')
  } else {
    prevBut.classList.remove('disabled')
  }


  // Check if the Current is the Last
  if (currentSlide == slidCount) {
    nextBut.classList.add('disabled')
  } else {
    nextBut.classList.remove('disabled')
  }


}


// Remove Active Class
function removeActive() {
  // Loop For Images
  sliderImg.forEach(function (img) {

    img.classList.remove('active');

  });

  // loop for Pagination Bullets
  paginationBullets.forEach(function (pagination) {

    pagination.classList.remove('active');

  });

}

// Disable Next and Prev