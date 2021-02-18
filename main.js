/* eslint-disable eqeqeq */
/* eslint-disable no-console */
var $carImg = document.querySelector('.img-container');

var car = {
  x: 0,
  y: 0,
  hasStarted: false
};

function start() {
  car.x += 10;
  var newPx = car.x + 'px';
  console.log(newPx);
  $carImg.style.left = newPx;
}

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

addEventListener('keydown', function (event) {
  if (event.key == ' ') {
    var idInterval = setInterval(start, 16);
  }
});
