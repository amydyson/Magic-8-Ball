


ß
//Get the user to enter a question for the 8 ball



function answer() {
  // var printString;
  var random = Math.floor(Math.random()*4);

  if (random === 0){
    printString="You're crazy";
  }
  else if (random === 1){
    printString="You're right";
  }
  else if (random === 2){
    printString="Maybe you should ask Google";
  }
  else {
    printString="Not sure about that";
  }
  document.getElementById("answer_field").innerHTML= printString;
  document.getElementById("question").value= "";
}
