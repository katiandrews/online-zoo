// change main video when user clicks on video in other cams
function changeVideo(newVideo) {
  const mainVideo = document.querySelector('.main-video');
  let temp = mainVideo.src;
  mainVideo.src = newVideo.src;
  newVideo.src = temp;
}

const layers = document.querySelectorAll('.layer');
for (let i = 0; i < layers.length; i++) {
  layers[i].addEventListener('click', function(event) {
    const smallVideo = layers[i].nextElementSibling;
    changeVideo(smallVideo);
  })
};

// ==============
// open and close accordeon
const accordeons = document.querySelectorAll('.accordeon-item');
for (let i = 0; i < accordeons.length; i += 1) {
  accordeons[i].addEventListener('click', function(event) {
    const accordeonContent = accordeons[i].querySelector('.item-content');
    const minusButton = accordeons[i].querySelector('.minus-button');
    const accordeonTitle = accordeons[i].querySelector('.item-title');
    const accordeonDivider = accordeons[i].querySelector('.divider');
    accordeonContent.classList.toggle('visually-hidden');
    if (accordeonContent.classList.contains('visually-hidden')) {
      minusButton.style.backgroundImage = "url('../../assets/icons/accordeon-plus.svg')";
      accordeonTitle.style.color = '#080029';
      accordeonDivider.style.backgroundColor = '#d3d3d3';
    } else {
      minusButton.style.backgroundImage = "url('../../assets/icons/minus-button.svg')";
      accordeonTitle.style.color = '#609fff';
      accordeonDivider.style.backgroundColor = '#609fff';
    }
  })
}