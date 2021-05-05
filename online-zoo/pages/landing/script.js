// famous pets slider
const sliderWrapper = document.querySelector('.famous-pets-slider-wrapper');
const slider = document.querySelector('.famous-pets-slider');
const gap = Number(getComputedStyle(slider).getPropertyValue('gap').match(/\d+/)[0]);
const petsPrev = document.querySelector('.famous-pets-button.slider-button-left');
const petsNext = document.querySelector('.famous-pets-button.slider-button-right');
const slideWidth = document.querySelector('.famous-pets-slider-item').offsetWidth;

function addSlidesToEnd(container, number) {
  for (let i = 0; i < number; i += 1) {
    let firstSlide = container.firstElementChild;
    let newSlide = firstSlide.cloneNode(true);
    container.appendChild(newSlide);
    firstSlide.remove();
  }
}

function addSlidesToBeginning(container, number) {
  for (let i = 0; i < number; i += 1) {
    let lastSlide = container.lastElementChild;
    let newSlide = lastSlide.cloneNode(true);
    container.insertBefore(newSlide, container.firstElementChild);
    lastSlide.remove();
  }
}

petsNext.addEventListener('click', function() {
  let delay;
  clearTimeout(delay);
  slider.animate([
    { transform: 'translateX(0px)' },
    { transform: `translateX(-${slideWidth + gap}px)` }
  ],
  {
    duration: 300,
    fill: "forwards"
  });
  delay = setTimeout(function() {
    slider.animate([
    { transform: 'translateX(0px)' }
  ],
  {
    duration: 0,
    fill: "forwards"
  });
    addSlidesToEnd(slider, 2);
  }, 310);
});

petsPrev.addEventListener('click', function() {
  slider.animate([
    { transform: `translateX(-${slideWidth + gap}px)` },
    { transform: 'translateX(0px)' },
  ],
  {
    duration: 300,
    fill: "forwards"
  });
  addSlidesToBeginning(slider, 2);
});

// ====================
// testimonials slider
const testimonialsPrev = document.querySelector('.testimonials-arrow.slider-button-left');
const testimonialsNext = document.querySelector('.testimonials-arrow.slider-button-right');

function scroll(direction) {
  const slider = document.querySelector('.testimonials-slider');
  const card = document.querySelector('.testimonials-card');
  const gap = Number(getComputedStyle(slider).getPropertyValue('gap').match(/\d+/)[0]);
  /* slider.style.direction = card.offsetWidth + gap; */
  if (direction === 'left') {
    let delay;
    clearTimeout(delay);
    slider.animate([
      { transform: `translateX(0px)` },
      { transform: `translateX(-${card.offsetWidth + gap}px)` }
    ], 
    {
      duration: 300,
      fill: "forwards"
    });
    delay = setTimeout(function() {
    slider.animate([
    { transform: 'translateX(0px)' }
  ],
  {
    duration: 0,
    fill: "forwards"
  });
    addSlidesToEnd(slider, 1);
  }, 300);
  } else if (direction === 'right') {
    let delay;
    clearTimeout(delay);
    slider.animate([
      { transform: `translateX(0px)` },
      { transform: `translateX(${card.offsetWidth + gap}px)` },
     
    ], 
    {
      duration: 300,
      fill: "forwards"
    });
    delay = setTimeout(function() {
    slider.animate([
    { transform: 'translateX(0px)' }
  ],
  {
    duration: 0,
    fill: "forwards"
  });
    addSlidesToBeginning(slider, 1);
  }, 300);
  } 
};

let autoScroll = setInterval(() => scroll('right'), 10000);
let delayTime = null;

// add delay when next, prev or testiomonial is clicked
function delayScroll() {
  clearTimeout(delayTime);
  clearInterval(autoScroll);
    delayTime = setTimeout(function() {
    autoScroll = setInterval(() => scroll('right'), 10000);
  }, 10000);
}

testimonialsNext.addEventListener('click', function() {
  delayScroll();
  scroll('left');
});

testimonialsPrev.addEventListener('click', function() {
  delayScroll();
  scroll('right');
});

document.querySelector('.testimonials-slider').addEventListener('click', function(event) {
  const testimonialsCards = document.querySelectorAll('.testimonials-card');
  for (let i = 0; i < testimonialsCards.length; i += 1) {
    if (event.target === testimonialsCards[i] || testimonialsCards[i].contains(event.target)) {
      delayScroll();
    }
  }
});


//====================
// change map-card info 
const mapCard = document.querySelector('.map-card');
let mapCardTitle = document.querySelector('.map-card-title');
let mapCardDescription = document.querySelector('.map-card-description');
let mapCardLink = mapCard.querySelector('.button-link');

// remove class 'active' from pins
function removeActive() {
  const mapPins = document.querySelectorAll('.map-pin');
  for (let i = 0; i < mapPins.length; i+=1) {
    mapPins[i].classList.remove('active');
  } 
}

// change info in cards
document.querySelector('.map-pin-alligator').addEventListener('click', function(event) {
  removeActive();
  document.querySelector('.map-pin-alligator').classList.add('active');
  mapCard.style.backgroundImage = 'url("../../assets/images/alligator-card.jpg")';
  mapCardTitle.textContent = 'Alligator';
  mapCardDescription.textContent = 'The broadcast is from Florida. See their real life.';
  mapCardLink.href = "../zoos translation/alligator.html";
})

document.querySelector('.map-pin-eagle').addEventListener('click', function(event) {
  removeActive();
  document.querySelector('.map-pin-eagle').classList.add('active');
  mapCard.style.backgroundImage = 'url("../../assets/icons/card-image.jpg")';
  mapCardTitle.textContent = 'Eagle';
  mapCardDescription.textContent = 'The broadcast is from an island near Los Angeles. Watch their real life.';
  mapCardLink.href = "../zoos translation/eagle.html";
})

document.querySelector('.map-pin-gorilla').addEventListener('click', function(event) {
  removeActive();
  document.querySelector('.map-pin-gorilla').classList.add('active');
  mapCard.style.backgroundImage = 'url("../../assets/images/gorilla-card.jpg")';
  mapCardTitle.textContent = 'Gorilla';
  mapCardDescription.textContent = 'The broadcast comes from the Democratic Republic of the Congo in a forest area. Watch their life and life together';
  mapCardLink.href = "../zoos translation/gorilla.html";
})

document.querySelector('.map-pin-panda').addEventListener('click', function(event) {
  removeActive();
  document.querySelector('.map-pin-panda').classList.add('active');
  mapCard.style.backgroundImage = 'url("../../assets/images/panda-card.jpg")';
  mapCardTitle.textContent = 'Panda';
  mapCardDescription.textContent = 'The broadcast comes from the mountainous regions of central China: Sichuan and Tibet. See their real life together.';
  mapCardLink.href = "../zoos translation/panda.html";
})


// ====================
// show pop-up on page
const leaveFeedbackBtn = document.querySelector('.testimonials-button');
const popup = document.querySelector('.pop-up');

function showPopup() {
    popup.classList.add('pop-up-open');
}

leaveFeedbackBtn.addEventListener('click', function(event) {
  showPopup();
  event.preventDefault();
});

// close popup, when clicking outside its content
popup.addEventListener('mousedown', function(event) {
  const popupContent = document.querySelector('.pop-up_content')
  if(event.target !== popupContent && !popupContent.contains(event.target)) {
    popup.classList.remove('pop-up-open');
  }
})

// check if all inputs are filled and then make button enable;
function checkValidation() {
  const buttonForm = document.querySelector('.button_form')
  const inputs = document.querySelectorAll('.input');
  const textArea = document.querySelector('.textarea');
  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].value === '') {
      buttonForm.classList.add('button_disabled');
      buttonForm.disabled = true;
      return;
    }
    if (textArea.value !== '') {
      buttonForm.classList.remove('button_disabled');
      buttonForm.disabled = false;
    } else {
      buttonForm.classList.add('button_disabled');
      buttonForm.disabled = true;
    }
  }
}

popup.addEventListener('keyup', checkValidation);





