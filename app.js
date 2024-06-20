//reqired variables
const button = document.querySelector(".start-btn");
const reset = document.querySelector(".reset-btn");
const session = document.querySelector(".min");
let state = true;
let myInterval;
let resetState = false;

//Main function to maintain state and total session time and give an aleart according to the user action.
const appTimer = () => {
    const sessionAmount = Number.parseInt(session.textContent);
    
    if(state){
        state = false;

        let totalseconds = sessionAmount * 60;
// This fun calulates total min,sec left using / and % operator and updates the respective DOM Element in HTML.
        const updateSeconds = () => {

            const min = document.querySelector(".min");
            const sec = document.querySelector(".sec");
        
            totalseconds--;
        
            let minleft = Math.floor(totalseconds / 60);
            let secLeft = totalseconds % 60;
        
            if(secLeft < 10){
                sec.textContent = "0" + secLeft;
            }else{
                sec.textContent = secLeft;
            }
            min.textContent = minleft;
        
            if(totalseconds <= 0){
               clearInterval(myInterval); // stops the setInterval after countdown is finished.
               alert("Session Completed take a 5 min break and come back!")
            }
        
        }
// Calls the updateSeconds fun with the dealy of 1sec till the timer goes down to 0min and 0sec i.e toatal sec to 0        
        myInterval = setInterval(updateSeconds,1000);//
        
    }else{
        alert("Session has already in Progress.");
    }
}

const resetFunction = () =>{
    if(!resetState && state){
        alert("Already on Reset");
    }else {
        clearInterval(myInterval);
        state = true;
        const min = document.querySelector(".min");
        const sec = document.querySelector(".sec");
        min.textContent = "25";
        sec.textContent = "00";
    }
}

//Runs after user is interacted with the Start button and since the event listner is already reg this line of code runs first.
//At first run the delay might not be 1000ms exactly, from second run onwards the delay will be 1 sec.
button.addEventListener('click',appTimer);

reset.addEventListener('click',resetFunction);