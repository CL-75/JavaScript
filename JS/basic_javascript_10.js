function call_loop() {
    var y = "";
    var x = 1;
    while(x < 11){
        y += "<br>" + x;
        x++;
    }
      document.getElementById("loop").innerHTML = y;

}

var Cars = ["Truck", "Sedan", "SUV", "Van", "Stationwagon"];
var Content = "";
var x;
function for_loop() {
    for (Y = 0; Y < Cars.length; Y++)
      Content += Cars[Y] + "<br>";

      document.getElementById("list_of_cars").innerHTML = Content;
}

function sloth_pics() {
    var sloth_pic = [];
    sloth_pic[0] = "hanging on branch";
    sloth_pic[1] = "eating";
    sloth_pic[2] = "smiling";
    sloth_pic[3] = "sleeping";
    document.getElementById("sloth").innerHTML = "In this picture, the sloth is " + sloth_pic[0] + ".";
}

let tv = {
    make: "Samsung ",
    price: "$1200 ",
    size: "70",
    description: function() {
        return "The TV is a " + this.price + this.size + "-inch " + this.make;
    }
};


document.getElementById("tv_object").innerHTML = tv.description();