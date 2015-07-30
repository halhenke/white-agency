var progressMeter = document.querySelector('.lightbox .progress .progress-meter');
var progressMessage = document.querySelector('.lightbox .progress .progress-message');
var resetButton = document.querySelector('.lightbox .reset button');
var dismissButton = document.querySelector('.lightbox .header .dismiss');
var progress = 0;

resetButton.onclick = function () {
  console.log('Button clicked...');
  progress = 0;
}

dismissButton.onclick = function () {
  $('.lightbox').animate({
    opacity: 0
  }, 3000, "linear", function() {
    console.log('Gone...');
  });

}

var progressUpdate = function () {
  if (progress <= 100) {
    progressMeter.style['background-color'] = 'blue';
    progressMeter.style.width = `${progress}%`;
    progressMessage.innerHTML = `Progress ${progress}%`;
    progress += 1;
  }
  else {
    progressMessage.innerHTML = `This task is ${progress - 1}% complete.`;
    progressMeter.style['background-color'] = 'green';
  }

}

window.onload = function () {
  $.getJSON("public/data.json", function (data) {
    // players = data.players;
    console.log(`Speed fetched: ${data.speed}`);
    $('.lightbox').animate({
      opacity: 1
    }, 3000, "linear", function() {
      window.setInterval(progressUpdate, data.speed);
    });

    // window.setInterval(progressUpdate, data.speed);
  });
  // window.setInterval(progressUpdate, 100);
};
