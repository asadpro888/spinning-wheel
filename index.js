const ctx = myCanvas.getContext("2d")
const center = {x: myCanvas.width / 2, y: myCanvas.height / 2};
const radius = myCanvas.width * 0.4;
ctx.beginPath();

const colors = ['red', 'yellow', 'black', 'blue', 'darkblue', 'white', 'green', 'indigo'];
const wheel = new Wheel(center, radius, colors);

let angle = 0;
ctx.globalAlpha = 0.5

animate()

function animate(){
    angle += Number(speed.value);
    wheel.draw(ctx, angle);
    requestAnimationFrame(animate)
}