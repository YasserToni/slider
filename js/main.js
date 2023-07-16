// Get slider Items || Array from [ES6 Feature]

var sliderImg = Array.from(document.querySelectorAll(".slider-container img"));

// console.table(sliderImg) // if i want print Array in table 

// Get Number of slice 
var slideCount = sliderImg.length;

// set current slide
var currentSlide = 1;

// Get slide number Element
var slideNumberElement = document.getElementById("slider-number");

// Get next button and previous button 
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

// Handle click on next and previous button 
nextButton.onclick = nextSlide;
prevButton.onclick = prevtSlide;

// Creat main UL Element 
var paginationElement = document.createElement('ul')

// add attribute id to ul element 
// paginationElement.id = 'pagination-ul';
paginationElement.setAttribute('id', 'pagination-ul');


for (var i = 1; i <= slideCount; i++){
    
    // create paginationItems
    var paginationItems = document.createElement('li');
    // add custom attribute to li
    paginationItems.setAttribute('data-index', i);
    // append text in li 
    paginationItems.appendChild(document.createTextNode(i))

    // append li in ul 
    paginationElement.appendChild(paginationItems)
};

// append ul in Element wit id => indicator
document.getElementById("indicator").appendChild(paginationElement);

// Get ul element 
let paginationCreatedUl = document.getElementById('pagination-ul');

// set array from paginaton li
var paginationBulletes = Array.from(document.querySelectorAll("#pagination-ul li"));
for (let i = 0; i < paginationBulletes.length; i++){
    paginationBulletes[i].onclick = function () {

        currentSlide = parseInt(this.getAttribute('data-index'));
        checker();
    }
}

// Trigger the checker function 
checker();

// Function next slide
function nextSlide() {
    
    if (currentSlide === slideCount) {
        return false;
    } else {
            currentSlide++;
    checker();
    }

};

// Function previous slide
function prevtSlide() {

    if (currentSlide === 1) {
        return false;
    } else {
            currentSlide--;
    checker();
    }
};

// Create the checker function 
function checker() {

    
// set the slide number 
slideNumberElement.textContent = ' Slide # ' + currentSlide + ' of ' + slideCount;
// slideNumberElement.textContent = `Slide#  ${currentSlide} of ${slideCount}`;

// Remove all active class  
    removeAllActive();
    
// set active class in current slide
sliderImg[currentSlide - 1].classList.add('active')


// add active class in paginaton items
    paginationCreatedUl.children[currentSlide - 1].classList.add("active");
    if (currentSlide === 1) {
        prevButton.classList.add('disabled')
    } else {
        prevButton.classList.remove('disabled')
    }


    if (currentSlide === slideCount) {
        nextButton.classList.add('disabled')
    } else{
        nextButton.classList.remove('disabled')
    }


}

// set the remove active function 
function removeAllActive() {
    // Remove active class form all img 
    sliderImg.forEach(function (img) {
        img.classList.remove('active');
    })
    
    // Remov Active class form all li 
    paginationBulletes.forEach(function (bullete) {
        bullete.classList.remove('active');
    })
}
