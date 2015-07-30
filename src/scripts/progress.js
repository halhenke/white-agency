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
    progressMeter.style['background-color'] = 'blue';
    progressMeter.style.width = `${progress}%`;
    progressMessage.innerHTML = `Progress ${progress}%`;
    progress += 1;
  }
  else {
    progressMessage.innerHTML = `This task is ${progress - 1} complete.%`;
    progressMeter.style['background-color'] = 'green';
  }

}

window.onload = function () {
  $.getJSON("public/data.json", function (data) {
    // players = data.players;
    console.log("Speed fetched....");
    window.setInterval(progressUpdate, data.speed);
  });
  // window.setInterval(progressUpdate, 100);
};
