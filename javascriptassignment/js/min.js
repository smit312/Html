let display = document.getElementById('display');

let buttons =Array.from( document.getElementsByClassName('button'));

buttons.map (button => {
    button.addEventListener('click',(e) => {
        // console.log('cliked');
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.innerText);
       switch(e.target.innerText){
            case 'C':
                display.innerText = '';   
                break;
            case '←' :
                if(display.innerText){
                    display.innerText = display.innerText.slice(0 ,-1);
                }
                break;
            case '×':
                display.innerText = display.innerText + '*';
                break;
                 
            case '=':
                console.log('clicked');
                
                console.log(display.innerText,'jhjhjhjj');
               display.innerText = eval(display.innerText);
              
               
               
               break;
            default:
                display.innerText += e.target.innerText;

       }
    });
});
