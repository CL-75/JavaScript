function myFunctionAdd() {
    var myMath = 3 + 5;
    document.getElementById("MathAdd").innerHTML = "3 + 5 = " + myMath;
}

function myFunctionSub() {
    var myMath = 5 - 3;
    document.getElementById("MathSub").innerHTML = "5 - 3 = " + myMath;
}

function myFunctionMult() {
    var myMath = 3 * 5;
    document.getElementById("MathMult").innerHTML = "3 * 5 = " + myMath;
}

function myFunctionMod() {
    var myMath = 5 % 3;
    document.getElementById("MathMod").innerHTML = "5 % 3 = " + myMath;
}

function myFunctionInc() {
    var myMath = 5;
    myMath++;
    document.getElementById("MathInc").innerHTML = "5 increased by one is " + myMath;
}

function myFunctionDec() {
    var myMath = 5;
    myMath--;
    document.getElementById("MathDec").innerHTML = "5 decreased by one is " + myMath;
}

function myFunctionRandom() {
    var rando = Math.floor(Math.random() * 100);
    document.getElementById("MathRand").innerHTML = "Your random number is " + rando;

}
