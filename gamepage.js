
  var y= math.floor(math.random()* 10+1);
  playername= localStorage.getItem("player_name")
  var guess=1;
  function submit(){

  

 if(x > y)

{
guess++;
alert("OOPS SORRY! ! TRY A SMALLER NUMBER") ;
}
else
{
guess++;

alert("OOPS SORRY! ! TRY A GREATER NUMBER")
}
  
    
var x= document.getElementById("guessfield").value;
if (x == y)
alert("CONGRATULATIONS! ! !"+playername+"you GUESSED IT RIGHT IN "+ guess + " GUESS ") ;guess= 1;
  }
function playagain () {
y = Math. floor (Math . random() * 10 + 1);
}
  
