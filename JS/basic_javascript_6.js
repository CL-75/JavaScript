function Bar_Function() {
    var Age, Can_enter;
    Age = document.getElementById("Age").value;
    Can_enter = (Age > 20) ? "You are old enough":"You are not old enough";
    document.getElementById("Enter").innerHTML = Can_enter + " to enter the bar."
}  


 function Student(Status, Major, Year) {
    this.Student_Status = Status;
    this.Student_Major = Major;
    this.Student_Year = Year;
}

var Jack = new Student("Freshman", "Biology", 2024);
var Sally = new Student("Senior", "Psychology", 2021);
var Burt = new Student("Sophmore", "Computer Science", 2022);
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Burt is a " + Burt.Student_Status + " majoring in " + Burt.Student_Major +
    " and graduating in " + Burt.Student_Year;
}  

 function count_function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var starting_point = 3;
        function plus_one() {
            starting_point += 1;
        }
        plus_one();
        return starting_point;
    }
}  