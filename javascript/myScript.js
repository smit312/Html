function para(){
    document.getElementById("para1").innerHTML = "paragraph changed sucessfully !"
}
var x,y,z ;
x= 5;
y=6;
z = x+y;
document.write(z);

var w = "John Doe";

var w  = 0; 

const smitt = {name:"mitul",lname:"parmar",age:28};
let txttt = "";
for (let y in smitt)
{
    txttt += smitt[y] + "  ";
}
document.getElementById("demo90").innerHTML = txttt;

// --------------------------------------------------------------------------

const person31 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const persoon1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const persoon2 = {
    firstName:"ssmmiitt",
    lastName: "tthhaakkaarr"
  }
  document.getElementById("demo20").innerHTML = person31.fullName.call(persoon2);

//   ----------------------------------------------------------------------------------------

myFunction1 ();
function myFunction1()
{
    let a = 4;
    document.getElementById("demo14").innerHTML = a * a;
}
// -----------------------------------------------------------------
const add12 = (function (){
 let counter = 0 ;
 return function () {counter +=1; return counter;}
}) ();
function add13 ()
{
    document.getElementById("demo21").innerHTML = add12();
}