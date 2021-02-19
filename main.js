/* eslint-disable no-console */
/* eslint-disable eqeqeq */
var $carImg = document.querySelector('.img-container');

var car = {
  x: 0,
  y: 0,
  hasStarted: false
};

function start() {
  car.x += 10;
  var newPx = car.x + 'px';
  $carImg.style.left = newPx;
}
var idInterval;

addEventListener('keydown', function (event) {
  console.log(car.hasStarted);
  if (event.key == 'ArrowUp') {
    $carImg.className = 'img-container up';
  } else if (event.key == 'ArrowDown') {
    $carImg.className = 'img-container down';
  } else if (event.key == 'ArrowRight') {
    $carImg.className = 'img-container right';
  } else if (event.key == 'ArrowLeft') {
    $carImg.className = 'img-container left';
  } else if (event.key == ' ' && car.hasStarted === false) {
    idInterval = setInterval(start, 50);
    car.hasStarted = true;
  } else if (event.key == ' ' && car.hasStarted === true) {
    clearInterval(idInterval);
    car.hasStarted = false;
  }
});
