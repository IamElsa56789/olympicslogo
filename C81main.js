canvas=document.getElementById("mycanvas")
ctx=canvas.getContext("2d")
color="aquablue";

ctx.beginPath()
ctx.strokeStyle="blue";
ctx.lineWidth=5
ctx.arc(250,210,40,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle="black";
ctx.lineWidth=5
ctx.arc(350,210,40,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle="red";
ctx.lineWidth=5
ctx.arc(450,210,40,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle="orange";
ctx.lineWidth=5
ctx.arc(300,260,40,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle="green";
ctx.lineWidth=5
ctx.arc(400,260,40,0,2*Math.PI)
ctx.stroke()

canvas.addEventListener("mousedown" , my_mousedown);
function my_mousedown (e) {
mouse_x = e.clientX-canvas.offsetLeft;
mouse_y = e.clientY-canvas.offsetTop;
circle(mouse_x,mouse_y)
}
function circle(mouse_x , mouse_y){
ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=3
ctx.arc(mouse_x,mouse_y,50,0,2*Math.PI)
ctx.stroke()
}
