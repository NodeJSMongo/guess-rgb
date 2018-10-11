//this function takes x number of random colors
var numsqr = 6;
var colors = randomColors(numsqr);
//selects all squares
var squares = document.querySelectorAll(".square");
//pick a random color
var goal = randomColor();
var rgbGiven = document.querySelector(".guess");
var tryAgain = document.querySelector("#tryAgain");
var resetButton = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

//RGB guess challange
rgbGiven.textContent = goal;

for (var i = 0; i < squares.length; i++) {
  //add initail colors to the squares
  squares[i].style.backgroundColor = colors[i];

  //add eventListeners to the squares
  squares[i].addEventListener("click", function(){
    //grab the color clicked
    var clickedColor = this.style.backgroundColor;
    //if the color matchs the goal
    if(clickedColor === goal){
      for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = goal;
      }
      tryAgain.textContent ="Congratulations!";
    }else{
      this.style.backgroundColor = "#000";
      tryAgain.textContent = "Try Again";
    }
  });
}


//pick a random colors for goal
function randomColor(){
  var randomNumber = Math.floor(Math.random()* colors.length);
  var randomRGB = colors[randomNumber];

  return randomRGB;
};

//generate random colors function

function randomColors(number){
  var arr= [];
  for (var i = 0; i <number; i++) {
    arr.push(generateRandomColor());
  }
  return arr;
}

function generateRandomColor(){
  var r = Math.floor(Math.random()* 256);
  var g = Math.floor(Math.random()* 256);
  var b = Math.floor(Math.random()* 256);

  return "rgb(" + r +", " + g +", "+ b +")" ;
}


//reset colors
resetButton.addEventListener("click", function(){
  colors = randomColors(numsqr);
  goal = randomColor();
  rgbGiven.textContent = goal;
  for (var i = 0; i < squares.length; i++) {
    //add initail colors to the squares
    squares[i].style.backgroundColor = colors[i];
  }
  tryAgain.textContent = "";
});

easy.addEventListener("click", function(){
  easy.classList.add("selected");
  hard.classList.remove("selected");
  numsqr = 3;
  colors = randomColors(numsqr);
  goal = randomColor();
  rgbGiven.textContent = goal;
  for (var i = 0; i < squares.length; i++) {
    //add initail colors to the squares
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
    }else{
      squares[i].style.display = "none";
    }
  }
});
hard.addEventListener("click", function(){
  hard.classList.add("selected");
  easy.classList.remove("selected");
  numsqr = 6;
  colors = randomColors(numsqr);
  goal = randomColor();
  rgbGiven.textContent = goal;
  for (var i = 0; i < squares.length; i++) {
    //add initail colors to the squares
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});
