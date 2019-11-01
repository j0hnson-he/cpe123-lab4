
function setup() 
{
   createCanvas(600, 600);
   background(210,251,235);
   noLoop();
}

function draw() 
{
   for (var i=0; i < 7; i ++)
    {
      push();
      noStroke();
      drawWuTang(random(width),
                 random(height),
                 random(0.1,1.5),
                 random(2*PI),
                 color(random(100,255),random(200),random(0)));
      pop();
    }

   push();
   textSize(60);
   textFont('Freak');
   text("W  U  -  T  A  N  G", 57, 316);
   strokeWeight(2);
   drawWuTang(300,300,2,0,color(255,185,30));
   pop();

   push();
   strokeWeight(37);
   noFill();
   rect(0,0,600,600);
   pop();


}



function drawWuTang(x,y,sc,r,fill_col)
{
   push();
   translate(x,y);
   rotate(r);
   scale(sc);

   fill(fill_col);

   beginShape();
   vertex(0-120,75-90);
   vertex(240-120,75-90);
   vertex(230-120,30-90);
   vertex(210-120,0-90);
   vertex(130-120,30-90);
   vertex(140-120,40-90);
   vertex(147-120,60-90);
   vertex(140-120,65-90);
   vertex(120-120,40-90);
   vertex(95-120,50-90);
   vertex(100-120,60-90);
   vertex(110-120,60-90);
   vertex(100-120,70-90);
   vertex(90-120,60-90);
   vertex(85-120,40-90);
   vertex(100-120,20-90);
   vertex(20-120,0-90);
   vertex(10-120,20-90);
   vertex(0-120,40-90);
   endShape(CLOSE);

   textSize(30);
   textFont('Freak');
   text("W  U  -  T  A  N  G", -120, 8);

   beginShape();
   vertex(0-120,100-90);
   vertex(20-120,140-90);
   vertex(60-120,160-90);
   vertex(140-120,170-90);
   vertex(115-120,140-90);
   vertex(110-120,120-90);
   vertex(120-120,105-90);
   vertex(140-120,120-90);
   vertex(150-120,140-90);
   vertex(150-120,180-90);
   vertex(200-120,160-90);
   vertex(220-120,140-90);
   vertex(240-120,100-90);
   endShape(CLOSE);

   pop();
}
