let qSeq ;
let gCount;
let bCount;
let answer ; 


document.addEventListener("DOMContentLoaded",function(){
    qSeq = 0 ;
    gCount = 0;
    bCount = 0;
    myFunction();   
    document.getElementById("aAnswer").style.display = "none";
    document.getElementById("bAnswer").style.display = "none";
    logData ();
        
});

function myFunction() {

if (qSeq >(0) ) {

document.getElementById("bstart").style.display = "none";
document.getElementById("aAnswer").style.display = "inline-block";
document.getElementById("bAnswer").style.display = "inline-block";}

 

switch (qSeq) { 

    
    case 0:
        document.getElementById('question-text').textContent = "Welcome to the Tennis Grand Slam Quiz";
        

        answer = 1 ; 
      break;
    case 1:
        gCount = 0;
        bCount = 0;
        document.getElementById('question-text').textContent = "Who is older Serena or Venus Williams ?  ";
        document.getElementById('aAnswer').textContent = "Serena";
        document.getElementById('bAnswer').textContent = "Venus";
        document.getElementById("q-image").src = "assets/images/Ser_n_Venus.jpeg";
        document.getElementById("q-image").alt = "Serena and Venus Williams ready to Play tennis prematch " ;
        answer = 2; 
      break;
    case 2:
        document.getElementById('question-text').textContent = "40-40 is also know as ? ";
        document.getElementById('aAnswer').textContent = "Duece";
        document.getElementById('bAnswer').textContent = "Advantage";
        document.getElementById("q-image").src = "assets/images/duece.jpeg";
        document.getElementById("q-image").alt = "Two Tennis players in close match at Wimbledon" ;
        answer = 1; 
      break;
    case 3:
       document.getElementById('question-text').textContent = "What surface is Wimbledon played on ? ";
       document.getElementById('aAnswer').textContent = "Clay";
       document.getElementById('bAnswer').textContent = "Grass";
       document.getElementById("q-image").src = "assets/images/Wimbledon_logo.png" ;
       document.getElementById("q-image").alt = "Wimbledon Club Logo" ;
       answer = 2; 
      break;
    case 4:
        document.getElementById('question-text').textContent = "An unreturned Serve is know as ? ";
        document.getElementById('aAnswer').textContent = "Ace";
        document.getElementById('bAnswer').textContent = "Jack";
        document.getElementById("q-image").src = "assets/images/serve.jpeg";
        document.getElementById("q-image").alt = "Pro tennis players in mid serve motion"  ;
        answer = 1; 
      break;
    case 5:
        document.getElementById('question-text').textContent = "Which player leads the Grand Slam race ? ";
        document.getElementById('aAnswer').textContent = "Novak Djokovic";
        document.getElementById('bAnswer').textContent = "Rafael Nadal ";
        document.getElementById("q-image").src = "assets/images/rafa_novak.jpeg";
        document.getElementById("q-image").alt = "Rafa and Novak ready to Play tennis prematch " ;
        answer = 2; 
      break;

      case 6:
        document.getElementById('question-text').textContent = `You Scored ${gCount} out of 5`;

        document.getElementById("bstart").style.display = "block";
        document.getElementById("aAnswer").style.display = "none";
        document.getElementById("bAnswer").style.display = "none";
        document.getElementById('bstart').textContent = "Try Again ?";
        qSeq = 0 ;
       

      break;
    
    default :  alert ('Unknown Error Occurred - Please Restart Game');
}}


function sButton(){

    qSeq = qSeq + 1 ;
    myFunction();
    logData ();    
    }

function aButton(){

    chkAnswerA ();
    qSeq = qSeq + 1;
    myFunction();
    logData ();
   
    }

function bButton(){


        chkAnswerB ();
        qSeq = qSeq + 1 ;
        myFunction();
        logData ();
     
    }


function chkAnswerA(){

    console.log("Check Answer A Run");

    if (answer < 2 ) {

        gCount =  gCount + 1 ;

   } else {
        bCount =  bCount + 1;
}}

function chkAnswerB(){

    console.log("Check Answer B Run");

    if (answer > 1 ) {

        gCount =  gCount + 1;

   } else {
        bCount =  bCount + 1;
}}


function logData(){
    
    console.log(`qSeq = ${qSeq}`);
    console.log(`good count = ${gCount}`);
    console.log(`bad count = ${bCount}`);
    document.getElementById('correct-a').textContent = `Correct :  ${gCount}`;
    document.getElementById('incorrect-a').textContent = `In-Correct :  ${bCount}`;
}


