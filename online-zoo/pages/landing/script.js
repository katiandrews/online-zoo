const slider = document.querySelector('.famous-pets-slider');
const gap = Number(getComputedStyle(slider).getPropertyValue('gap').match(/\d+/)[0]);
const sliderWrapper = document.querySelector('.famous-pets-slider-wrapper');
const slides = [...document.querySelectorAll('.famous-pets-slider-item')];
let clones = [];
const petsPrev = document.querySelector('.famous-pets-button.slider-button-left');
const petsNext = document.querySelector('.famous-pets-button.slider-button-right');

/* slides.forEach(item => {
  let clone = item.cloneNode(true);
  clone.classList.add('clone');
  slider.appendChild(clone);
  clones.push(clone);
}) */

function moveSlider() {
  let sliderWidth = slider.offsetWidth;
  if ((parseInt(slider.style.right) || 0) + sliderWidth > sliderWidth + gap) {
    slider.style.right = 0 + 'px';
  } else {
    console.log((parseInt(slider.style.right) || 0) + sliderWidth + gap);
    slider.style.right = ((parseInt(slider.style.right) || 0) + sliderWidth + gap) + 'px';
  }
}

petsNext.addEventListener('click', function(event) {
  moveSlider();
});

petsPrev.addEventListener('click', function(event) {
  moveSlider();
});

//====================
// change map-card info 
const mapCard = document.querySelector('.map-card');
let mapCardTitle = document.querySelector('.map-card-title');
let mapCardDescription = document.querySelector('.map-card-description');

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
})

document.querySelector('.map-pin-eagle').addEventListener('click', function(event) {
  removeActive();
  document.querySelector('.map-pin-eagle').classList.add('active');
  mapCard.style.backgroundImage = 'url("../../assets/icons/card-image.jpg")';
  mapCardTitle.textContent = 'Eagle';
  mapCardDescription.textContent = 'The broadcast is from an island near Los Angeles. Watch their real life.';
})

document.querySelector('.map-pin-gorilla').addEventListener('click', function(event) {
  removeActive();
  document.querySelector('.map-pin-gorilla').classList.add('active');
  mapCard.style.backgroundImage = 'url("../../assets/images/gorilla-card.jpg")';
  mapCardTitle.textContent = 'Gorilla';
  mapCardDescription.textContent = 'The broadcast comes from the Democratic Republic of the Congo in a forest area. Watch their life and life together';
})

document.querySelector('.map-pin-panda').addEventListener('click', function(event) {
  removeActive();
  document.querySelector('.map-pin-panda').classList.add('active');
  mapCard.style.backgroundImage = 'url("../../assets/images/panda-card.jpg")';
  mapCardTitle.textContent = 'Panda';
  mapCardDescription.textContent = 'The broadcast comes from the mountainous regions of central China: Sichuan and Tibet. See their real life together.';
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





