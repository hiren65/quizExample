// JavaScript Document

//Quiz Question and options answer
var question = ["What is the name of home Galaxy?","What is the name of nearest Star?"];
var qustOneAnswerOpt = ["Andromeda","MilkyWay"];
var qustTwoAnswerOpt = ["Alfa Centouri","Sun"];

//ANswers
var answer = ["Milky Way","Sun"];
var count = 0;
var trueAnswer = 0;
var wrongAnswer = 0;

var mainQuiz = function(qstn,ansr){
	
	this.qstn = qstn;
	this.ansr = ansr;
	
};

mainQuiz.prototype.cin = function(){
	
	return this.qstn;
}

//Main function
var trkk = function (){
	
	if(count>1){
		document.getElementById("q1").innerHTML = "Game Is Over";
		document.getElementById('opt1').innerHTML = "";
	    document.getElementById('opt2').innerHTML = "" ;
		
		document.getElementById('result').innerHTML = "You have true " + trueAnswer + " anwer" + " and wrong answer " + wrongAnswer;  
		document.getElementById('verify').innerHTML = "";
		hide();
		return ;
	}
	   
	show();
	
	
	
    document.getElementById("q1").innerHTML = question[count];
	allOption(count);
	
	/*
	var x = document.getElementById('displayOnOff');
	x.checked=1;
			document.getElementById('verify').innerHTML = x.checked;
	*/	
	
	count++;
	
	document.getElementById("displayOnOff").disabled = false; 
		    document.getElementById("display1").disabled = false;
	
}

// IT shows quiz question and all its options
var allOption = function(ct){
	
	if(ct===0){
		document.getElementById('opt1').innerHTML = qustOneAnswerOpt[0];
	    document.getElementById('opt2').innerHTML = qustOneAnswerOpt[1];
	}else
		if(ct===1){
		document.getElementById('opt1').innerHTML = qustTwoAnswerOpt[0];
	    document.getElementById('opt2').innerHTML = qustTwoAnswerOpt[1];
		}
	
}

/* Refresh Quiz Page  */
var refreshQuiz = function(){
	count=0;
	trueAnswer = 0;
	wrongAnswer = 0;
	document.getElementById('result').innerHTML = "";
	 document.getElementById("q1").innerHTML = "Let`s Start Game Again!!";
		document.getElementById('opt1').innerHTML = "";
	    document.getElementById('opt2').innerHTML = "";
	     document.getElementById('verify').innerHTML = "";
	
}

//Hide all radio button
var hide = function(){
	
	var x = document.getElementById('displayOnOff');
	var y = document.getElementById('display1');
	
	x.checked = 0;
	y.checked = 0;
	
	if(x.style.display = 'none'){
		x.style.display = 'block';
	}
	if(x.style.display = 'block'){
		x.style.display = 'none';
	}
	
	if(y.style.display = 'none'){
		y.style.display = 'block';
	}
	if(y.style.display = 'block'){
		y.style.display = 'none';
	}

	
	/*
	var y = document.getElementById('display1');
	y.style.display = 'none';
	*/
}
// show all radio button
var show = function(){
	
	
	
		var x = document.getElementById('displayOnOff');
	    var y = document.getElementById('display1');
	
	
	
	
	x.checked = 0;
	y.checked = 0;
	
	x.style.display = 'inline-block'
	
	y.style.display = 'inline-block'
	
	
	
}

window.onload = function(){
	
	hide();
	
}

//When you click radio button option it gives your answer wright or wrong and disable all radio button.
var verifica = function(){
	
	 
	var x = document.getElementById('displayOnOff');
	var y = document.getElementById('display1');
		
       
		  if (document.getElementById('displayOnOff').checked && count-1===0) {
                 
			      document.getElementById('verify').innerHTML = "You Choose Wrong Answer  " ;
			      wrongAnswer++;
				       
                  }
	
	       if (document.getElementById('display1').checked && count-1===0) {
                 
			      document.getElementById('verify').innerHTML = "Correct";
			      trueAnswer++;
			    
              }
	
	         if (document.getElementById('displayOnOff').checked && count-1===1) {
                 
			      document.getElementById('verify').innerHTML = "You Choose wrong Answer " ;
				  wrongAnswer++;
				       
                  }
	
	       if (document.getElementById('display1').checked && count-1===1) {
                 
			      document.getElementById('verify').innerHTML = "Correct";
			      trueAnswer++;
			    
              }
	       document.getElementById("displayOnOff").disabled = true; 
		    document.getElementById("display1").disabled = true;
         
}

window.onload();

