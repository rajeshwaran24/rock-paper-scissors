// Element

const userScoreEl=document.querySelector('.user-score');
const currentScoreEl= document.querySelector('.current-score');
const resetEl=document.querySelector('.btn');
const userChoiceEl=document.querySelector('.user-choice');
const computerChoiceEl=document.querySelector('.computer-choice');
const resultEl=document.querySelector('.result');


// global variable

let userScore=0
let computerScore=0

// init function

function init(){
    userScore=0
    computerScore=0
    userChoiceEl.innerText=null
    computerChoiceEl.innerText=null
    resultEl.innerText=null
}
// step-2

const getCmpChoice=function()
{
    const randomNumber=Math.floor(Math.random()*3)+1;
    if(randomNumber===1)
    {
        return 'rock';
    }
    else if(randomNumber===2)
    {
        return 'paper';
    }
    else if(randomNumber===3)
    {
        return 'scissors';
    }
}

//step-3
const getUserChoice=function(userBtn)
{
  const users=userBtn;
  const comps=getCmpChoice();

  const result=getResult(users,comps)
  if(result==='WON'){
    userScore=userScore+1;
  }
  else{
    computerScore=computerScore+1;
  }
// display

userScoreEl.innerText=userScore;
currentScoreEl.innerText=computerScore;
userChoiceEl.innerText=`user selected ${users}`
computerChoiceEl.innerText=`cmp selected ${comps}`
resultEl.innerText=`result ${result}`

}

// step=1

const getResult=function(user,cmp)
{
    if(user==='rock'){
        if(cmp==='rock')
        {
            return 'DRAW';
        }
        else if(cmp==='paper')
        {
            return'WON';
        }
        else if(cmp==='scissors')
        {
            return 'LOST';
        }
    }


    if(user==='paper')
    {
        if(cmp==='rock')
        {
            return'WON';
        }
        else if(cmp==='paper')
        {
            return'DRAW';
        }
        else if(cmp==='scissors')
        {
            return'LOST';
        }
    }

    if(user==='scissors')
    {
        if(cmp==='rock')
        {
            return'LOST';
        }
        else if(cmp==='paper')
        {
            return'WON';
        }
        else if(cmp==='scissors')
        {
            return'DRAW';
        }
    }
}
init();
resetEl.addEventListener('click',()=>{
    userScoreEl.innerText=0;
    currentScoreEl.innerText=0;
    init();
})
