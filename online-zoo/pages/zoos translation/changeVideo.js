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