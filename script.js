//selecting Elements
var inputbox=document.getElementById("inputbox")
var result=document.getElementById("result")
var guesscount=document.getElementById("guesscount")
var guess=3

//Generate random number from 1 to 5
var randomnumber=Math.floor(Math.random()*10)+1 //1 to 10
if(randomnumber>5)
{
    randomnumber=randomnumber-5
}

//event headler function
function checkthenumber()
{
    if(inputbox.value==randomnumber)
    {
        alert("you got it right,congrats!!")
        result.textContent="you are right"
    }
    else{
        guess=guess-1
        if(guess==0)
        {
            alert("you are lost,Generate random number is:"+randomnumber)

        }
        guesscount.textcontent="Available guess:"+guess
        result.textContent="you are wrong!"
    }
}

