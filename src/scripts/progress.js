var progressMeter = document.querySelector('.lightbox .progress .progress-meter');
var progressMessage = document.querySelector('.lightbox .progress .progress-message');
var resetButton = document.querySelector('.reset button');
var progress = 0;

resetButton.onclick = function () {
  console.log('Button clicked...');
  progress = 0;
}

var progressUpdate = function () {
  if (progress <= 100) {
    progressMeter.style.width = `${progress}%`;
    progressMessage.innerHTML = `Progress ${progress}%`;
    progress += 1;
  }
  else {
    progressMessage.innerHTML = `This task is ${progress - 1} complete.%`;
  }

}

window.onload = function () {
  window.setInterval(progressUpdate, 100);
};
