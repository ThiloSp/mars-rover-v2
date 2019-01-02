// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}

// ======================
function turnLeft(){
      switch (rover.direction) {
        case "N":
        rover.direction = "W";
        break;
        case "W":
        rover.direction = "S";
        break;
        case "S":
        rover.direction = "E";
        break;
        case "E":
        rover.direction = "N";
        break;
      }

  console.log("turnLeft was called!");
}

function turnRight(){
  switch (rover.direction) {
    case "N":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "S";
    break;
    case "S":
    rover.direction = "W";
    break;
    case "W":
    rover.direction = "N";
    break;
  }
  console.log("turnRight was called!");
}

function moveForward(){
  switch (rover.direction) {
    case "N":
    rover.y -= 1;
    break;
    case "E":
    rover.x += 1;
    break;
    case "S":
    rover.y += 1;
    break;
    case "W":
    rover.x -= 1;
    break;
  }
  console.log("moveForward was called");
  console.log("x: " + rover.x);
  console.log("y: " + rover.y);
}


var commands = ["r", "f", "f", "r", "f", "f", "l", "f", "r", "f", "f"];

function goForward(orders){
  for (var i = 0; i < orders.length; i++) {
    if (orders[i] == "r") {
      turnRight();
    } else if (orders[i] == "l") {
      turnLeft();
    } else if (orders[i] == "f" && rover.x >= 0 && rover.x < 10 && rover.y >= 0 && rover.y < 10) {
      moveForward();
      rover.travelLog.push("x: " + rover.x + " - y: " + rover.y);
    } else {
      console.log("out of grid");
    }
  } 
}




function travel() {
  console.log(rover.travelLog);
}


//----------- calls-------

goForward(commands);
travel();


