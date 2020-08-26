function full_sentence() {
    var p1 = "I made ";
    var p2 = "a huge ";
    var p3 = "bowl of pasta ";
    var p4 = "for dinner.";
    var whole = p1.concat(p2, p3, p4);
    document.getElementById("concatenate").innerHTML = whole;
}


function slice_method() {
    var sentence = "All work and no play makes Jack a dull boy";
    var section = sentence.slice(27, 33);
    document.getElementById("Slice").innerHTML = section;
}


function string_method() {
    var x = 182;
    document.getElementById("numbers_to_string").innerHTML = x.toString();
}

function precision_method() {
    var y = 1974.093485773892
    document.getElementById("precision").innerHTML = y.toPrecision(7);
}