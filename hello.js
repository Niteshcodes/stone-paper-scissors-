let rock=document.getElementById("rock");
let paper=document.getElementById("paper");
let scissors=document.getElementById("scissors");
let msg=document.getElementById('msg');
let ush=document.getElementById('us');
let csh=document.getElementById('cs');
let cs=0,us=0;
var win=new Audio('win.mp3');
var uh=new Audio('uh.mp3');
var lose=new Audio('lose.mp3');

/* <span id="us">0</span> : <span id="cs">0</span>


<div class="result">
            <p>Paper covers rock. You win!</p>
        </div>

<p id="action-message">Make your move.</p>

<div class="choices">
            <div id="rock" class="choice">
                <img width="48" height="48" src="1.png" />
            </div>
            <div id="paper" class="choice">
                <img width="48" height="48" src="2.png" />
            </div>
            <div id="scissors" class="choice">
                <img width="48" height="48" src="3.png" />
            </div>


*/
function computer(){
    const gusses=['rock','paper','scissors'];
    let computer_gusses=Math.floor(Math.random(gusses.length)*10)%3;
    console.log(computer_gusses);
    return computer_gusses;
}

 rock.addEventListener('click',()=>{
    
    let result=computer();
    if(result==0){
        msg.innerText="Both gusses same";
        rock.classList.add('yellow-border');
        setTimeout(function () {
            rock.classList.remove('yellow-border');            
        },1000)
        
        uh.play();

      
        

                
    }
    else if(result==1){
        msg.innerText="Losse! paper covers rock";
        cs++;
        csh.innerText=cs;
        rock.classList.add('red-border');
        setTimeout(function () {
            rock.classList.remove('red-border');            
        },1000)
        lose.play();

    }
    else{
        us++;
        msg.innerText="win! rock break the scissor";
        ush.innerText=us;
        rock.classList.add('green-border');
        setTimeout(function () {
            rock.classList.remove('green-border');            
        },1000)
        win.play();
    }
 })
 paper.addEventListener('click',()=>{
    
        let result=computer();
        if(result==1){
            msg.innerText="Both gusses same";
            paper.classList.add('yellow-border');
        setTimeout(function () {
            paper.classList.remove('yellow-border');            
        },1000)
            uh.play();
                    
        }
        else if(result==2){
            msg.innerText="Losse! scssior cut the paper";
            cs++;
            csh.innerText=cs;
            paper.classList.add('red-border');
        setTimeout(function () {
            paper.classList.remove('red-border');            
        },1000)
            lose.play();
    
        }
        else{
            us++;
            msg.innerText="win! paper cover rock";
            ush.innerText=us;
            paper.classList.add('green-border');
        setTimeout(function () {
            paper.classList.remove('green-border');            
        },1000)
            win.play();
        }
     }
 )
scissors.addEventListener('click',()=>{
    
    
    let result=computer();
    if(result==2){
        msg.innerText="Both gusses same";
        scissors.classList.add('yellow-border');
        setTimeout(function () {
            scissors.classList.remove('yellow-border');            
        },1000)
        uh.plascissors
                
    }
    else if(result==1){
        msg.innerText="win! scssior cut the paper";
        us++;
        ush.innerText=us;
        scissors.classList.add('green-border');
        setTimeout(function () {
            scissors.classList.remove('green-border');            
        },1000)
        win.play();

    }
    else{
        cs++;
        msg.innerText="Loss! rock break the scssior";
        csh.innerText=cs;
        scissors.classList.add('red-border');
        setTimeout(function () {
            scissors.classList.remove('red-border');            
        },1000)
        lose.play();
    }
 }
   
 )
