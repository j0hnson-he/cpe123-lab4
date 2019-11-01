var tx = 0;
var cx = 500;
var cy = 100;

function setup() 
{
   createCanvas(600, 600);
   background(210,251,235);
   noLoop();
}

function draw() 
{

   drawBackground();

   for (var i=0; i < 30; i ++)
    {
      push();
      drawTree(  tx,
                 random(-70,-20),
                 color(random(0,50),random(255),random(0,50)),
                 random(0.5,1.3));
      tx += 40;
      pop();
    }

   
   drawTree();


}

function drawBackground(){
   fill(0,255,0);
   rect(0,360,600,300);
   push();
   noStroke();
   fill(0,0,255);
   ellipse(300,600,700,370);
   fill(255,220,50);
   ellipse(530,60,100,100);
   fill(200,255,0);
   ellipse(200, 500, 60,30);
   ellipse(400,550,70,30);
   fill(0,0,255);
   triangle(210,500,290,510,290,540)
   pop();

   push();
   noStroke();
   fill(255);
   beginShape();
   curveVertex(cx-10,cy+50);
   curveVertex(cx-20,cy+20);
   curveVertex(cx-60,cy);
   curveVertex(cx-80,cy+20);
   curveVertex(cx-120,cy);
   curveVertex(cx-160,cy+10);
   curveVertex(cx-240,cy);
   curveVertex(cx-300,cy+10);
   curveVertex(cx-340,cy+20);
   curveVertex(cx-380,cy+60);
   curveVertex(cx-400,cy+80);
   curveVertex(cx-460,cy+100);
   curveVertex(cx-560,cy+120);
   curveVertex(cx-580,cy+140);
   curveVertex(cx-400,cy+140);
   curveVertex(cx-240,cy+120);
   curveVertex(cx-160,cy+140);
   curveVertex(cx-100,cy+120);
   curveVertex(cx-40,cy+140);
   curveVertex(cx,cy+100);
   endShape(CLOSE);
   pop();
}


function drawTree(tx,y,fill_col,sc)
{
   translate(tx,360);
   scale(sc);
   push();
   fill(fill_col);
   //noStroke();
   triangle(0-10,y-60,30-10,30-60,-30-10,30-60);
   triangle(0-10,y-60,20-10,0-60,-20-10,0-60);
   pop();
   push();
   fill(110,78,65);
   rect(-10-10,30-60,20,30);
   pop();
}
