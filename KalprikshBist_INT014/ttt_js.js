
var combi_even ="";
var combi_odd ="";

var chance=0;

var combi_list={"123","456","789","147","258","369","159","357"};

function myFunction(cellId){

  myCell=document.getElementById("cellId");

  if(chance%2==0)
  {
    myCell.setAttribute(background-color,darkgrey);
    myCell.innerHTML=o;
  }
  else
  {
    myCell.setAttribute(background-color,red);
    myCell.innerHTML(X);
  }
  chance++;
}
