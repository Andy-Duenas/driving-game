/* eslint-disable eqeqeq */
/* eslint-disable no-console */
var $carImg = document.querySelector('.img-container');

addEventListener('keydown', function (event) {
  if (event.key == 'ArrowUp') {
    $carImg.className = 'img-container up';
  } else if (event.key == 'ArrowDown') {
    $carImg.className = 'img-container down';
  } else if (event.key == 'ArrowRight') {
    $carImg.className = 'img-container right';
  } else if (event.key == 'ArrowLeft') {
    $carImg.className = 'img-container left';
  }
});
