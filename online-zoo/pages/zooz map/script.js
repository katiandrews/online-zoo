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
  if (window.matchMedia("(min-width: 1920px)").matches) {
    mapCard.style.bottom = "25%";
    mapCard.style.left = "370px";
  } else {
    mapCard.style.bottom = "17%";
    mapCard.style.left = "300px";
  }
  mapCardDescription.textContent = 'The broadcast is from Florida. See their real life.';
  mapCard.classList.remove('visually-hidden');
})

document.querySelector('.map-pin-gorilla').addEventListener('click', function(event) {
  removeActive();
  document.querySelector('.map-pin-gorilla').classList.add('active');
  mapCard.style.backgroundImage = 'url("../../assets/images/gorilla-card.jpg")';
  if (window.matchMedia("(min-width: 1920px)").matches) {
    mapCard.style.bottom = "108px";
    mapCard.style.left = "583px";
  } else {
    mapCard.style.bottom = "45px";
    mapCard.style.left = "362px";
  }
  mapCardTitle.textContent = 'Gorilla';
  mapCardDescription.textContent = 'The broadcast comes from the Democratic Republic of the Congo in a forest area. Watch their life and life together';
  mapCard.classList.remove('visually-hidden');
})

document.querySelector('.map-pin-panda').addEventListener('click', function(event) {
  removeActive();
  document.querySelector('.map-pin-panda').classList.add('active');
  if (window.matchMedia("(min-width: 1920px)").matches) {
    mapCard.style.bottom = "25%";
    mapCard.style.left = "1250px";
  } else {
    mapCard.style.bottom = "17%";
    mapCard.style.left = "800px";
  }
  mapCard.style.backgroundImage = 'url("../../assets/images/panda-card.jpg")';
  mapCardTitle.textContent = 'Panda';
  mapCardDescription.textContent = 'The broadcast comes from the mountainous regions of central China: Sichuan and Tibet. See their real life together.';
  mapCard.classList.remove('visually-hidden');
})

// close card when click outside
document.querySelector('.background-img').addEventListener('mousedown', function(event) {
  if (event.target !== mapCard && !mapCard.contains(event.target)) {
    mapCard.classList.add('visually-hidden');
  }
});