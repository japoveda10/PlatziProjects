var drawArea = document.getElementById("drawingArea");
var paper = drawArea.getContext("2d");

// draw(0,0,10,300);
// draw(0,10,20,300);



for(var i=0; i<300; i++)
{
  draw(0, i*10, (i+1)*10, 300);
  draw(300, 300 - (i*10), 300 - ((i+1)*10), 0);
}

function draw(initialX, initialY, finalX, finalY)
{
  paper.beginPath();
  paper.strokeStyle = "yellow";
  paper.moveTo(initialX, initialY);
  paper.lineTo(finalX, finalY);
  paper.stroke();
  paper.closePath();
}
