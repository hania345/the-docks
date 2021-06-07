/*

Officer: 1680135
CaseNum: 101-2-49567933-1680135

Case 101 - The Case of Lina Lovelace
Stage 3 - The Docks

You’ve followed Lina down to the docks. She sure frequents some classy places.
Okay let’s see who she’s meeting down there.

Identify Lina by drawing a green filled rectangle around her.
She’s the woman in the red dress of course.

Identify the heavy-set man in the fishing overalls by drawing a blue filled
rectangle around him.

Identify the man in the striped top by drawing a yellow filled rectangle around
him.

The rectangles should cover the targets as accurately as possible without
including anything else.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use only 255 or 0 for r,g,b values. Set alpha to 100 for some opacity.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	noStroke();
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
    fill(0,255,0,100);
	rect( 894,77,100,200);
	
	fill(0,0,255,100);
	rect(1236,81,150,150);
	
	fill(255,255,0,100);
	rect(762,77,70,190);

}
