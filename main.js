/* eslint-disable eqeqeq */
var $carImg = document.querySelector('.img-container');

var car = {
  x: 0,
  y: 0,
  hasStarted: false,
  direction: 'right'
};

function start() {
  var newPx = null;
  if (car.direction === 'right') {
    car.x += 10;
    newPx = car.x + 'px';
    $carImg.style.left = newPx;
  }
  if (car.direction === 'left') {
    car.x -= 10;
    newPx = car.x + 'px';
    $carImg.style.left = newPx;
  }
  if (car.direction === 'up') {
    car.y -= 10;
    newPx = car.y + 'px';
    $carImg.style.top = newPx;
  }
  if (car.direction === 'down') {
    car.y += 10;
    newPx = car.y + 'px';
    $carImg.style.top = newPx;
  }
}

var idInterval;

addEventListener('keydown', function (event) {
  if (event.key == 'ArrowUp') {
    $carImg.className = 'img-container up';
    car.direction = 'up';
  } else if (event.key == 'ArrowDown') {
    $carImg.className = 'img-container down';
    car.direction = 'down';
  } else if (event.key == 'ArrowRight') {
    $carImg.className = 'img-container right';
    car.direction = 'right';
  } else if (event.key == 'ArrowLeft') {
    $carImg.className = 'img-container left';
    car.direction = 'left';
  } else if (event.key == ' ' && car.hasStarted === false) {
    idInterval = setInterval(start, 16);
    car.hasStarted = true;
  } else if (event.key == ' ' && car.hasStarted === true) {
    clearInterval(idInterval);
    car.hasStarted = false;
  }
});
