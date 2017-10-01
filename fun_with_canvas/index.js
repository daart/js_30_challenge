const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let lastX = 0;
let lastY = 0;
let hue = 0;
let thicknessSwitcher = true;
let isDrawing = false;
let ctx = canvas.getContext('2d');

ctx.lineWidth = 50;
ctx.lineCap = 'round';
ctx.lineJoin = 'round';

let draw = e => {
  if(!isDrawing) return;

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;
  if(hue >= 360) {
    hue = 0;
  }

  if(ctx.lineWidth >= 50 || ctx.lineWidth <= 1) {
    thicknessSwitcher = !thicknessSwitcher;
  }

  if(thicknessSwitcher) {
    ctx.lineWidth++
  } else {
    ctx.lineWidth--
  }

}

let drawTrigger = e => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

canvas.addEventListener('mousedown', drawTrigger);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseout', () => isDrawing = false);
canvas.addEventListener('mouseup', () => isDrawing = false);