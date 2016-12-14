//Variable that will store de canvas tag
var drawArea = document.getElementById("drawingArea");

//Variable that will store canvas 2d context
var paper = drawArea.getContext("2d");

// Cycle that generates the drawing
for(var i=0; i<300; i++)
{
  draw(0, i*10, (i+1)*10, 300);
  draw(300, 300 - (i*10), 300 - ((i+1)*10), 0);
}

// Draws a line according to the parameters
function draw(initialX, initialY, finalX, finalY)
{
  paper.beginPath();
  paper.strokeStyle = "yellow";
  paper.moveTo(initialX, initialY);
  paper.lineTo(finalX, finalY);
  paper.stroke();
  paper.closePath();
}
