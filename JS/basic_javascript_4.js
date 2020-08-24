function myDictionary() {
    var Cars = {
        Type: "Truck", 
        Make: "Ram",
        Maker: "Dodge",
        Color: "Red"
    };
    document.getElementById("Dictionary").innerHTML = Cars.Color;
}

function myDictionaryDelete() {
    var Cars = {
        Type: "Truck", 
        Make: "Ram",
        Maker: "Dodge",
        Color: "Red"
    };
    delete Cars.Color;
    document.getElementById("DictionaryDelete").innerHTML = Cars.Color;
}

