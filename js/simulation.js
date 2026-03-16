function drawFiber(){

let canvas = document.getElementById("fiberCanvas");
let ctx = canvas.getContext("2d");

let diameter = document.getElementById("diameter").value;
let pitch = document.getElementById("pitch").value;
let wavelength = document.getElementById("wave").value;

ctx.clearRect(0,0,600,600);

/* center */

let cx = 300;
let cy = 300;

/* draw hexagonal lattice */

for(let row=-8; row<=8; row++){

for(let col=-8; col<=8; col++){

let x = cx + col * pitch + (row%2)*pitch/2;
let y = cy + row * pitch * 0.86;

let distance = Math.sqrt((x-cx)*(x-cx)+(y-cy)*(y-cy));

/* skip center core */

if(distance > 30){

ctx.beginPath();
ctx.arc(x,y,diameter,0,2*Math.PI);
ctx.fillStyle="#111";
ctx.fill();

}

}

}

/* fiber core */
window.onload = drawFiber;
ctx.beginPath();
ctx.arc(cx,cy,25,0,2*Math.PI);
ctx.fillStyle="red";
ctx.fill();

/* optical mode glow */

let gradient = ctx.createRadialGradient(cx,cy,10,cx,cy,80);

gradient.addColorStop(0,"rgba(0,255,255,0.8)");
gradient.addColorStop(1,"rgba(0,0,0,0)");

ctx.beginPath();
ctx.arc(cx,cy,80,0,2*Math.PI);
ctx.fillStyle = gradient;
ctx.fill();

/* display parameters */

ctx.fillStyle="rgba(18, 26, 21, 0.2)";
ctx.font="16px Arial";

ctx.fillText("Diameter: "+diameter,20,30);
ctx.fillText("Pitch: "+pitch,20,50);
ctx.fillText("Wavelength: "+wavelength+" nm",20,70);

}