var progressMeter = document.querySelector('.lightbox .progress .progress-meter');
var progressMessage = document.querySelector('.lightbox .progress .progress-message');
var resetButton = document.querySelector('.lightbox .reset button');
var dismissButton = document.querySelector('.lightbox .header .dismiss');
var progress = 0;

// For IE 8
$('.lightbox').attr('opacity', 0);

resetButton.onclick = function () {
  progress = 0;
}

dismissButton.onclick = function () {
  $('.lightbox').animate({
    opacity: 0
  }, 1000, "linear", function() {
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
    $('.lightbox').animate({
      opacity: 1
    }, 3000, "linear", function() {
      window.setInterval(progressUpdate, data.speed);
    });
  });
};
