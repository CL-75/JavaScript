

function Subtract_Numbers_1() {
    var Y = 10;
    document.write(40 - Y + "<br>");  
}

function Subtract_Numbers_2() {
    document.write(Y - 5);        /* here are the global/local variable and intentional
                                   error functions in one section */
}

Subtract_Numbers_1();
Subtract_Numbers_2();


function myFunction() {
var x = document.getElementById("userInput").value;
var y;
if(x <= 100) {
    y = "You entered 100 or a number smaller than 100";    // If statement and function
      }
      else {
      y = "You entered a number bigger than 100";
      }
    document.getElementById("userNumber").innerHTML = y;
}



function Time_Function() {
    var time = new Date().getHours();
    var reply;
    if(time < 12 == time > 0) {
        reply = "It is morning time!";
    }

    else if (time > 12 == time < 18) {           // Time function
        reply = "It is the afternoon."
    }

    else
      reply = "It is evening time.";

    document.getElementById("time_of_day").innerHTML = reply;
}
