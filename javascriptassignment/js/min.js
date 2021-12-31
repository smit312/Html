let display = document.getElementById("display");
let btn0 = Array.from(document.getElementsByClassName("a"));
// console.log(btn0);

let btn1 = Array.from(document.getElementsByClassName("abc"));
// console.log(btn1);
btn1.map((abc)=>{
  abc.addEventListener("click", (a) => {
    
    // console.log(a.target.innerText);
    switch (a.target.innerText)
    {
      case"sin":
        
        display.innerText = Math.sin(display.innerText);
      break;
      case"cos":
        display.innerText = Math.cos(display.innerText);
        break;
      case"tan":
        display.innerText = Math.tan(display.innerText);
        break;
      case"rand":
        display.innerText = Math.random(display.innerText);
        break;
        case"ceil":
          display.innerText = Math.ceil(display.innerText);
        case"floor":
          display.innerText = Math.floor(display.innerText);
    }
  })

})
let buttons = Array.from(document.getElementsByClassName("button"));
let π = 3.14;
function fact(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  //console.log(fact);
  return fact;
}
function echeck()
{
   let check =  display.innerText = display.innerText * 2.718281;
//    console.log(check);
    return check ;
}

function check(value) {
  console.log(value);
  let isvalid;
  let chList = ["+", "-", "!", "e", "*" ,"/","π","%"];

  let lastchar = value.charAt(value.length - 1);



  if (chList.includes(lastchar)) {
    isvalid = false;
  } else {
    isvalid = true;
  }

  console.log(isvalid);
  return isvalid;
}
function pi()
{
    let picheck = display.innerText * 3.14 ;
    return(picheck);
  
}
buttons.map((button) => {
  button.addEventListener("click", (e) => {
    
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        break;
      case "←":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case "×":
        if (check(display.innerText)) {
          display.innerText = display.innerText + "*";
        }
        break;
      case "÷":
          if(check(display.innerText)){
        display.innerText = display.innerText + "/";
          }
        break;

      case "π":
        if (check(display.innerText)) {
            display.innerText += "π";
          }
        break;
      case "in":
        display.innerText = Math.log(display.innerText);
        break;
      case "exp":
       
         display.innerText = Math.exp(display.innerText);
        
        break;

      case ".":
        if (display.innerText == null || display.innerText == "0") {
          display.innerText = ".";
        } else {
          display.innerText += ".";
        }
        break;
      case "mod":
        if(check(display.innerText)){
            display.innerText += "%";
           
        }
        break;
       
      case "=":
        
        if (display.innerText.charAt(display.innerText.length - 1) == "!") {
          display.innerText = display.innerText.substring(
            0,
            display.innerText.length - 1
          );
          display.innerText = fact(display.innerText);
        }
        if (display.innerText.charAt(display.innerText.length - 1) == "e") {
            display.innerText = display.innerText.substring(
              0,
              display.innerText.length - 1
            );
            display.innerText = echeck(display.innerText);
          }
          if (display.innerText.charAt(display.innerText.length - 1) == "π") {
            display.innerText = display.innerText.substring(
              0,
              display.innerText.length - 1
            );
            display.innerText = pi(display.innerText);
          }
        if(display.innerText.includes('←'))
        {
            let sign = display.innerText.indexOf('←');
            let a = display.innerText.substring(0,sign)
            let b = display.innerText.substring(sign +1 ,display.innerText.length)
            display.innerText = Math.pow(a,b);
        }
        
       display.innerText = eval(display.innerText);

        break;
      case "n!":
        if (check(display.innerText)) {
          display.innerText += "!";
        }
       break;
      case "e":
        if (check(display.innerText)) {
        display.innerText += 'e';
        }
        break;
        case "+" :
            if(check(display.innerText)){
                display.innerText += "+";

            }
            break;
        case "-" :
            if(check(display.innerText)){
                display.innerText += "-";

            }
            break;
        case "∓":
        if (display.innerText.substring(0, 1) == "-")
          display.innerText = display.innerText.substring(
            1,
            display.innerText.length
          );
        else display.innerText = "-" + display.innerText;
        break;
        case"|x|":
         display.innerText = Math.abs(display.innerText);
        break;
        case"xy":
            display.innerText += "←";
            break;
          case"log":
          display.innerText = Math.log10(display.innerText);
         
            
            break;
        case"x2":
            display.innerText = (display.innerText) * (display.innerText);
            break;
        case"2√x":
            display.innerText = Math.sqrt(display.innerText);
            break;
        case"10x":
            display.innerText = 10 * (display.innerText);
            break;
        case"1⁄x":
            display.innerText = "1/";
            break;
          case"ln":
            display.innerText = Math.log(display.innerText);
          break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
