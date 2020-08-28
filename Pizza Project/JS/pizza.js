function getReceipt() {
    var text1 = "<h3><u>Your Order:</u></h3>";  //Initializing our string to be passed from func to func to build a receipt
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");   // building an array for the size selection
    for (var i=0; i<sizeArray.length; i++) {
        if(sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }

    if (selectedSize === "Single Slice") {
        sizeTotal = 4;
    }
    else if (selectedSize === "Personal") {
        sizeTotal = 6;
    }

    else if (selectedSize === "Medium") {     // Setting a base price for each pizza size
        sizeTotal = 8;
    }
    else if (selectedSize === "Large") {
        sizeTotal = 10;
    }

    else if (selectedSize === "Extra Large") {
        sizeTotal = 14;
    }

    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".00");  //These variables containing our size and total will be passed to other functions
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    getTopping(runningTotal, text1);

};

function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = [];  //Array for selected toppings
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j=0; j<toppingArray.length; j++) {
        if(toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: (" + toppingArray[j].value + ") ");
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }

    var toppingCount = selectedTopping.length;   //Setting toppingCount to the length of the selected topping array
    if (toppingCount > 1) {
       toppingTotal = (toppingCount - 1);
    }

       else  {
        toppingTotal = 0;
       }

    //Completeing and displaying the order total with size and toppings selected and added up
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected toppings: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Order Total: " + "$" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "</h3><u>Total:</u> <strong>$" + runningTotal + ".00" + "</strong></h3>";
};

function showAlert() {
    alert("Your order has been placed. Your delicious pizza is on its way soon!")
};
    


