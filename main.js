var width= screen.width;
var last_position_of_x, last_position_of_y

canvas.document.getElementById("my canvas");
canvas.getContext("2d");

if(width<992){
    document.getElementById("myCanvas").new_width;
    document.getElementById("myCanvas").new_height;
    document.body.style.overflow="hidden";
} 
color= document.getElementById("color").value
width_of_the_line= document.getElementById("width_of_the_line").value
 
document.addEventListener("touchstart" my_touchstart);

function my_touchstart(e){
console.log("my_touchstart");
last_position_of_x=e.touches[0].clientX-offsetleft; 
last_position_of_x=e.touches[0].clientX-offsetleft; 
}

document.addEventListener("touchmove" my_touchmove);

function my_touchmove(e){
ctx.line_width=width_of_the_line;

ctx.beginpath();
console.log("last_position_of_x_and_y_cordinates_with_=");
console.log("x="+last_position_of_x,"y="+last_position_of_y);
ctx.moveto(last_position_of_x,last_position_of_y);

console.log("last_position_of_x_and_y_cordinates_with_=");
console.log("x="+last_position_of_x,"y="+last_position_of_y);
ctx.lineto(current_position_of_x,current_position_of_y);

last_position_of_x=current_position_of_x;
last_position_of_y=current_position_of_y;
}


















































