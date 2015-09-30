var c = document.getElementById('canv');
var $ = c.getContext('2d');
var w = c.width = window.innerWidth;
var h = c.height = window.innerHeight;

var x = 0;
var y = 0;
var ang = 0;

function draw() {
  $.fillStyle = 'hsla(55, 25%, 95%, 1)';
  $.fillRect(0, 0, w, h);
  var rad = 400;
  $.save();
  $.translate(w / 2, h / 2);
  $.rotate(ang / Math.PI);
  for (var i = 1; i < 75; i++) {
    x = Math.sin(i * 3) * Math.PI * 5;
    $.beginPath();
    if (i % 2 !== 0) {
      $.fillStyle = 'hsla(0,0%,15%,1)';
      $.arc(x, y, rad - (i * 5), 0, 2 * Math.PI, false);
      $.fill();
    } else {
      $.beginPath();
      $.fillStyle = 'hsla(255,255%,255%,1)';
      $.arc(x, y, rad - (i * 5), 0, 2 * Math.PI, false);
      $.fill();
    }
  }
  $.restore();
  ang -= 0.35;
}

window.addEventListener('resize', function() {
  c.width = w = window.innerWidth;
  c.height = h = window.innerHeight;
}, false);

run();

function run() {
  window.requestAnimationFrame(run);
  draw();
}
