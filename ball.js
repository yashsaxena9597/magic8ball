
	function Name()
	{
		var na;var res; 
		
		na=document.getElementById("val").value;
		//console.log(na);
		res=(na=="")?"Hello!" : "Hello,"+na+"!"; 
		document.getElementById("name").innerHTML=res;
		document.getElementById("Agree").innerHTML="Do You want to play?"
		document.getElementById("sit").style.display = "block";
		document.getElementById("Question").style.display="none";
			
		}
		function Question()
		{	document.getElementById("sit").style.display = "none";
			document.getElementById("Question").style.display="block";
			
		}
		function Answer()
		{	//document.getElementById("sit").style.display = "none";
			//document.getElementById("Question").style.display="none";
			var a=0;
			var ans=["It is certain", "It is decidedly so","Reply hazy try again", "Cannot predict now", "Do not count on it",
"My sources say no", "Outlook not so good", "Signs point to yes"];

				a=Math.floor(Math.random() * 8);

				document.getElementById("Msg").style.display = "block";
document.getElementById("Ans").innerHTML=ans[a];
document.getElementById("noms").innerHTML="Reload page to play again!!";
				document.getElementById("noti").style.display = "none";


		}
		function No(){
			

			document.getElementById("sit").style.display = "none";
		document.getElementById("Question").style.display="none";
			document.getElementById("thanxs").innerHTML="Thanks for visiting us Close tab for exit"
		}