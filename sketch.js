//define needed variables
var xPos, yPos;
var xSpeed, ySpeed;
var radius;
var state;
var textX;
var string = ["Jeff Goldblum isn't real", "Jeff Goldblum is a sorcerer",
  "He is just a character created for the dinosaurs", "Don't you believe he's famous?"];
var index = 0;
var imgCouch, imgPerson, imgGinger, imgJoe, imgSmile;

var timeout1Set = false;
var timeout2Set = false;
var timeout3Set = false;
var timeout4Set = false;
var timeout5Set = false;
var timeout6Set = false;
var timeout7Set = false;
var timeout8Set = false;
var timeout9Set = false;

var shouldShowLine1 = false;
var shouldShowLine2 = false;
var shouldShowLine3 = false;
var shouldShowLine4 = false;
var changeState = false;
var showJoe = false;
var warning = false;
var changeAgain = false;
var restart = false;


var xTrue1 = false;
var yTrue1 = false;
var xTrue2 = false;
var yTrue2 = false;


function preload() {
  //load images
  imgCouch = loadImage("couch.png");
  imgPerson = loadImage("person.png");
  imgGinger = loadImage("ginger.png");
  imgJoe = loadImage("joe.png");
  imgSmile = loadImage("smile.png")
}


function setup() {
  //set up canvas, background, and font
  createCanvas(900,600);
  background(20);
  textFont("Courier New");

  //assign variable values
  state = 1;
  xPos = 10;
  yPos = 10;
  xSpeed = 3;
  ySpeed = 5;
  radius = 10;
  textX = width;
}

function draw() {
  //state 1
  if (state == 1) {
    //set background
    background(234, 223, 234);

    //set up and draw text
    push();
    fill(0);
    textSize(24);
    translate(width/2, height/2);
    text("Press 'Enter' to Start", 0, 0);
    pop();

    //make bouncing ball
    fill(34, 255, 34);
    ellipse(xPos, yPos, radius*2, radius*2);

    xPos += xSpeed;
    yPos += ySpeed;

    if (xPos > width - radius || xPos < radius) {
      xSpeed = -xSpeed;
    }
    if (yPos > height - radius || yPos < radius) {
      ySpeed = -ySpeed;
    }
  }

  //state 3
  if (state === 2) {
    //set background
    background(0, 34, 200);

    //set up text in increments of timeout (or at least attempt to)
    //use timer booleans to check if timers have been set

    if (shouldShowLine1 == true) { timer1(); }
    if (shouldShowLine2 == true) { timer2(); }
    if (shouldShowLine3 == true) { timer3(); }
    if (shouldShowLine4 == true) { timer4(); }

    //use timer booleans to check if timers have been set
    if (timeout1Set == false){
      setTimeout(function() { shouldShowLine1 = true },300);
      timeout1Set = true;
    }
      // push();
      // fill(255, 166, 249);
      // textSize(40);
      // text("bunk", 100, 100);
      // pop();
    //300);

    if (timeout2Set == false){
      setTimeout(function() { shouldShowLine2 = true }, 2000); //{
      timeout2Set = true;
    }
      // push();
      // fill(255, 166, 249);
      // textSize(30);
      // text("noun", 100, 150);
      // pop();
    // }, 2000);

    if (timeout3Set == false){
      setTimeout(function() { shouldShowLine3 = true }, 3000);
      timeout3Set = true;
    }
      // push();
      // fill(255, 180, 249);
      // textSize(25);
      // text("nonsense", 110, 200);
      // pop();
    // }, 3000);

    if (timeout4Set == false){
      setTimeout(function() { shouldShowLine4 = true }, 5000);
      timeout4Set = true;
    }
      // push();
      // fill(255, 180, 249);
      // textSize(35);
      // text("Press 't' to continue", 400, 500);
      // pop();
    // }, 5000);

    // push();
    // fill(255, 166, 249);
    // textSize(40);
    // text("bunk", 100, 100);
    // textSize(35);
    // text("noun", 100, 150);
    // pop();

  }

  //state 3
  if (state == 3) {
    //set background
    background(255, 122, 33);

    /////////////
    //scrolling text example from Processing Strings and Drawing Text Tutorial
    //https://www.processing.org/tutorials/text/
    ////////////
    push();
    fill(23, 33, 23);
    textAlign(LEFT);
    textSize(30);
    text(string[index], textX, 500);

    textX -= 3;
    w = textWidth(string[index]);
    if (textX < -w) {
      textX = width;
      index = (index + 1) % string.length;
    }
    pop();

    textSize(36);
    fill(233, 233, 0);
    text("Hit '1' to Continue", 100, 100);
  }

  //state 4
  if (state === 4) {
    //set background
    background(227, 237, 28);

    //set up and display text
    push();
    textSize(30);
    fill(117, 0, 227);
    text("Find my orbs", 500, 200);
    textSize(10);
    text("Psssss! They're magical :>", 700, 550);
    pop();

    var orbs = [{
      name: "pCircle",      ////////////////
      radius: 30,           // Considered using JSON layout
      x: mouseX,            // But things were becoming too complicated
      y: mouseY             // It was becoming harder to understnad from an
    },                      // outsiders view
    {                       ///////////////
      name: "circle1",
      radius: 40,
      x: 30,
      y: 400
    }]

    ////////////
    //collision detection example from MDN web docs 2D collision detection
    //https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
    ///////////

    //set the value of each circle
    var pCircle = {radius: 30, x: mouseX, y: mouseY};
    var circle1 = {radius: 40, x: 30, y: 400};
    var circle2 = {radius: 40, x: 300, y: 250};
    var circle3 = {radius: 35, x: 500, y: 30};
    var circle4 = {radius: 20, x: 400, y: 550};
    var circle5 = {radius: 55, x: 200, y: 100};

    //distance for circle 1
    var dist1X = circle1.x - pCircle.x;
    var dist1Y = circle1.y - pCircle.y;
    var distance1 = Math.sqrt(dist1X * dist1X + dist1Y * dist1Y);

    //distance for circle 2
    var dist2X = circle2.x - pCircle.x;
    var dist2Y = circle2.y - pCircle.y;
    var distance2 = Math.sqrt(dist2X * dist2X + dist2Y * dist2Y);

    //distance for circle 3
    var dist3X = circle3.x - pCircle.x;
    var dist3Y = circle3.y - pCircle.y;
    var distance3 = Math.sqrt(dist3X * dist3X + dist3Y * dist3Y);

    //distance for circle 4
    var dist4X = circle4.x - pCircle.x;
    var dist4Y = circle4.y - pCircle.y;
    var distance4 = Math.sqrt(dist4X * dist4X + dist4Y * dist4Y);

    //distance for circle 5
    var dist5X = circle5.x - pCircle.x;
    var dist5Y = circle5.y - pCircle.y;
    var distance5 = Math.sqrt(dist5X * dist5X + dist5Y * dist5Y);

    //draw player circle and first circle
    //ellipse(orbs[0].x, orbs[0].y, orbs[0].radius, orbs[0].radius);
    ellipse(pCircle.x, pCircle.y, pCircle.radius, pCircle.radius);
    ellipse(circle1.x, circle1.y, circle1.radius, circle1.radius);

    if (distance1 < circle1.radius + pCircle.radius) {
      console.log('circle 1 touched');
      //draw second circle if first circle is touched
      var showC2 = true;
    }
    if (distance2 < circle2.radius + pCircle.radius) {
      console.log('circle 2 touched');
      //draw third circle if second circle is touched
      var showC3 = true;
    }
    if (distance3 < circle3.radius + pCircle.radius) {
      console.log('circle 3 touched');
      //draw fourth circle if third circle is touched
      var showC4 = true;
    }
    if (distance4 < circle4.radius + pCircle.radius) {
      console.log('we have hit the 4th circle');
      //draw fith circle if fourth circle is touched
      var showC5 = true;
    }
    if (distance5 < circle5.radius + pCircle.radius) {
      console.log('you did it hoorah')
      //change state if fifth circle is touched
      state = 5;
    }


    if (showC2) {
      ellipse(circle2.x, circle2.y, circle2.radius, circle2.radius);
    }
    if (showC3) {
      ellipse(circle3.x, circle3.y, circle3.radius, circle3.radius);
    }
    if (showC4) {
      ellipse(circle4.x, circle4.y, circle4.radius, circle4.radius);
    }
    if (showC5) {
      ellipse(circle5.x, circle5.y, circle5.radius, circle5.radius);
    }
  }

  //state 5
  if (state === 5) {
    //set background
    background(200);
    // var image = document.createElement("IMG");
    // image.setAttribute("src", "data:image/jpeg;base64,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");
    // image.setAttribute("width", "300");
    // image.setAtrribute("height", "100");
    //var img = createImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTno1qEgW1Q2zibYI0C8d2GaT3Ty4FVJLJ1QYcNNBh303yg0mvd&s', 'couch');
    //var img = loadImage("couch.jpg");
    image(imgCouch, 0, 200);
    image(imgPerson, mouseX - 100, mouseY - 100);

    push();
    fill(11, 158, 116);
    textSize(20);
    text("There's a couch", width/2 - 100, height/2);
    text("What will you do with it?", 450, 400);
    pop();

    //if person touches couch change to state 6
    if (mouseX >= 200 && mouseY >= height/2 && mouseX <= 250 && mouseY <= 400) {
      state = 6;
    }
  }

  //state 6
  if (state === 6) {
    //set background
    background(255, 247, 0);

    //set up and show text
    push();
    fill(71, 69, 6);
    textSize(30);
    text("There's one final thing", 400, 100);
    textSize(40);
    text("Take the ginger shot", 300, 200);
    pop();

    //place image
    image(imgGinger, 350, 250);

    //detect if the user has clicked on the image
    if (mouseX > 500 || mouseX < 550) {
      xTrue1 = true;
    }
    if (mouseY > 250 || mouseY < 300) {
      yTrue1 = true;
    }
  }

  //state 7
  if (state === 7) {
    //set background
    background(84, 249, 255);

    //set up and display text
    push();
    textAlign(CENTER)
    fill(168, 3, 144);
    textSize(45);
    text("Look in the right corner", width/2, height/2);
    textSize(10);
    text("You get a bonus", 840, 50);
    text("Look in THE corner", 840, 60);
    textSize(5);
    text("CLICK", 20, 570);
    pop();

    // //detect if mouse is clicked over "CLICK"
    // if (mouseX >= 15 || mouseX <= 30) {
    //   xTrue2 = true;
    // }
    // if (mouseY >= 560 || mouseY <= 580) {
    //   yTrue2 = true;
    // }
    //change the state to 8 after 5 seconds
    if (timeout5Set == false){
      setTimeout(function() {
        changeState = true
      }, 4000);
      timeout5Set = true;
    }
    if (changeState == true) {
      state = 8;
    }
  }

  //state 8
  if (state === 8) {
    //set background
    background(189, 6, 6);

    if (timeout6Set == false) {
      setTimeout(function() {
        warning = true;
      }, 1000);
      timeout6Set = true;
    }
    if (warning) {
      //set up and display text
      push();
      textSize(40);
      textAlign(CENTER);
      text("VIEWER DISCRETION ADVISED", width/2, height/2);
      textSize(15);
      text("You've been warned", 120, 550);
      pop();
    }

    if (timeout7Set == false){
      setTimeout(function() {
        showJoe = true;
      }, 5000);
      timeout7Set = true;
    }
    if (showJoe == true) {
      //set background
      background(189, 6, 6);

      //set up and display text
      push();
      fill(243, 245, 223);
      textSize(45);
      textAlign(CENTER);
      text("1-800 CHOKE DAT HOE!", width/2, height/2);
      textSize(25);
      text("-Joe 'Madea's Big Happy Family'", width/2, height/2 + 25);
      pop();

      //show image
      image(imgJoe, 100, 50);
      image(imgJoe, 300, 400);
      image(imgJoe, 600, 75);
    }

    if (timeout8Set === false) {
      setTimeout(function() {
        changeAgain = true;
      }, 10000);
    }
    if (changeAgain === true) {
      state = 9;
    }
  }

  //state 9
  if (state === 9) {
    //set background
    background(19, 214, 117);

    //place image where cursor is
    push();
    image(imgSmile, mouseX - 50, mouseY - 50);
    pop();

    //set and display text
    push();
    fill(109, 34, 214);
    textSize(30);
    text("That's my favorite part", 100, 300);
    textSize(35);
    text("Press 'n'", 700, 500);
    pop();

  }


  //state 10
  if (state === 10) {
    //set background
    background(255, 240, 255);

    //set up and display text
    push();
    textSize(60);
    textAlign(CENTER);
    fill(0, 100, 150);
    text("Did you win?", width/2, height/2);
    textSize(10);
    text("Press something", width/2, 400);
    pop();

  }

  //state 11
  if (state === 11) {
    //set background
    background(167, 118, 242);

    //set up and display text
    push();
    textSize(45);
    text("Congrats", 90, 200);
    pop();

    if (timeout9Set === false){
      setTimeout(function() {
        restart = true;
      }, 10000);
      timeout9Set = true;
    }
    if (restart === true) {
      state = 1;
    }
  }

  //state 12
  if (state === 12) {
    //set background
    background(0);

    //set up and display text
  }
}



function keyPressed() {
  //state = 2 when Enter is pressed
  if (key === "Enter") {
    state = 2;
  }
  //state = 3 when t is pressed
  if (key === "t" || key === "T") {
    state = 3;
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    clearTimeout(timer4);
  }
  //state = 4 when 1 is pressed
  if (key === "1") {
    state = 4;
  }
  //state = 10 when n is pressed
  if (key === "n" || key === "N") {
    state = 10;
  }
  //state = 11 when e is pushed
  if (key === "e" || key === "E") {
    state = 11;
  }
  //state = 12 when g is pressed
  if (key === "g" || key === "G") {
    state = 12;
  }
}

function mouseClicked() {
  //state = 7 if mouse is in desired area and user clicks
  if(xTrue1 && yTrue1) {
    state = 7;
  }
  // if(xTrue2 && yTrue2) {
  //   state = 8;
  // }
}


/////////////////////////
//timer functions for bunk definition (state 2)
function timer1() {
  push();
  fill(255, 166, 249);
  textSize(40);
  text("bunk", 100, 100);
  pop();
}
function timer2() {
  push();
  fill(255, 166, 249);
  textSize(30);
  text("noun", 100, 150);
  pop();
}
function timer3() {
  push();
  fill(255, 180, 249);
  textSize(25);
  text("nonsense", 110, 200);
  pop();
}
function timer4() {
  push();
  fill(255, 180, 249);
  textSize(35);
  text("Press 't' to continue", 400, 500);
  pop();
}
