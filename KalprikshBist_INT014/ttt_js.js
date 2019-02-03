
var combi_even ="";
var combi_odd ="";

var chance=0;

function myFunction(cellId){


  console.log(cellId.innerHTML);


  if(chance%2==0)
  {
    cellId.innerHTML="X";
    cellId.style.backgroundColor='green';
    var one = document.getElementById("1").innerHTML;
    var two = document.getElementById("2").innerHTML;
    var three = document.getElementById("3").innerHTML;
    var four = document.getElementById("4").innerHTML;
    var five = document.getElementById("5").innerHTML;
    var six = document.getElementById("6").innerHTML;
    var seven = document.getElementById("7").innerHTML;
    var eight = document.getElementById("8").innerHTML;
    var nine = document.getElementById("9").innerHTML;

    if((one == two && two == three)||
       (four == five && five== six)||
       (seven == eight && eight == nine)||
       (one == four && four == seven)||
       (five == two && two == eight)||
       (three == six && six == nine)||
       (nine == five && five == one)||
       (seven == five && five == three))
       {
         setTimeout(function(){
         alert("X won");
       },125);

       }
  }
  else
  {
    cellId.innerHTML="O";
    cellId.style.backgroundColor='red';
    var one = document.getElementById("1").innerHTML;
    var two = document.getElementById("2").innerHTML;
    var three = document.getElementById("3").innerHTML;
    var four = document.getElementById("4").innerHTML;
    var five = document.getElementById("5").innerHTML;
    var six = document.getElementById("6").innerHTML;
    var seven = document.getElementById("7").innerHTML;
    var eight = document.getElementById("8").innerHTML;
    var nine = document.getElementById("9").innerHTML;
    if((one == two && two == three)||
       (four == five && five == six)||
       (seven == eight && eight == nine)||
       (one == four && four == seven)||
       (five == two && two == eight)||
       (three == six && six == nine)||
       (nine == five && five == one)||
       (seven == five && five == three))
       {
         setTimeout(function(){
           alert("O won");
         },125);

       }
  }
  chance++;
}
