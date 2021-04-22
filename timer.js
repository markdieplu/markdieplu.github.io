function toTimeString(seconds) {
  return (new Date(seconds * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0];
}

function startTimer() {
  var nextElem = $(this).parents('td').next();
  var duration = nextElem.text();
  var a = duration.split(':');
  var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
  setInterval(function() {
    seconds--;
    if (seconds >= 0) {
      nextElem.html(toTimeString(seconds));
    }
    if (seconds === 0) {
    	document.getElementById("myBtn").disabled = true;
      alert('sorry, out of time');
      clearInterval(seconds);
    }
  }, 1000);
}
$('.btn').on('click', startTimer);
