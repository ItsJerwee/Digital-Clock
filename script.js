function showTime() {
  var hours = new Date().getHours();
  var minutes = new Date().getMinutes();
  var seconds = new Date().getSeconds();
  var meridiem = document.getElementById("meridiem");

  if (hours > 12) {
    hours = hours - 12;
    meridiem.innerHTML = "PM";
  }

  if (hours == 0) {
    hours = 12;
  }

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  document.getElementById("hrs").innerHTML = hours;
  document.getElementById("mins").innerHTML = minutes;
  document.getElementById("secs").innerHTML = seconds;
}

setInterval(showTime, 10);
