function setup() {
  createCanvas(600, 600);
    background(255,255,255);
}

function draw() {
fill(0,0,0)



  
  // Start drawing the shape.
  fill(0)
  beginShape();

  // Add vertices.
  vertex(300, 130);
  vertex(320, 125);
  vertex(360, 150);
  vertex(390, 180);
  vertex(420, 230);
  vertex(440, 320);
  vertex(450, 430);
  vertex(450, 500);
  vertex(300, 500);

  // Stop drawing the shape.
  endShape(CLOSE);
beginShape();

  // Add vertices.
  vertex(300, 130);
  vertex(280, 125);
  vertex(240, 150);
  vertex(210, 180);
  vertex(180, 230);
  vertex(160, 320);
  vertex(150, 430);
  vertex(150, 500);
  vertex(300, 500);

  // Stop drawing the shape.
  endShape(CLOSE);

fill(200,170,150)
rect(250,400,100,150)
fill(120,120,200)
beginShape();

  // Add vertices.
  vertex(250, 450);
  vertex(300, 500);
  vertex(350, 450);
  vertex(500, 550);
  vertex(500, 600);
  vertex(100, 600);
  vertex(100, 550);



  // Stop drawing the shape.
  endShape(CLOSE);
fill(200,170,150)
ellipse(300,300,230,300,300)

noStroke()
fill(0,0,0)
triangle(300,150,400,200,345,150)
triangle(300,150,200,200,265,150)
stroke(1)
fill(220,210,200)
quad(250,230,300,230,295,280,255,280)
quad(300,230,350,230,345,280,305,280)

fill(150,60,40)
triangle(250, 375, 360, 375, 300, 420);

fill(200,170,150)
noStroke()
rect(250,400,100,30)
stroke()

}