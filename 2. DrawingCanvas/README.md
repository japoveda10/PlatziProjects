# DrawingCanvas
Some drawings made with canvas

## How does it work?
Drawing Canvas has 3 files:
<li>An HTML file</li>
<li>A JavaScript file</li>
<li>A CSS file</li>
<br>
In the JavaScript file, there is a function called <code>draw</code> that draws a line based on its parameters 
(first point x coordinate, first point y coordinate, second point x coordinate, second point y coordinate). The next cycle 
is in charge of making the figures. The first <code>draw</code> function invocation draws the bottom-left figure and the second <code>draw</code> function invocation draws the upper-right figure:

for(var i=0; i<300; i++)
<br>
{
<br>
draw(0, i(times)10, (i+1)(times)10, 300);
<br>
 draw(300, 300 - (i(times)10), 300 - ((i+1)(times)10), 0);
<br>
}

The drawing is made up with different lines. Let (initialX, initialY) be the first point and (finalX, finalY)
be the second point of a line.
<br>

In each iteration of the <code>for</code> and for the first figure (bottom-left figure), initialX and finalY
remain the same while initialY and finalX increase by 10 pixels.
<br>

In each iteration of the <code>for</code> and for the second figure (upper-right figure), initialX and finalY
remain the same while initialY and finalX decrease by 10 pixels.

<b>Note</b>
<p>(times) is replacing the multiply symbol because it cannot be shown in this document.</p>
