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
        
})




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
        document.getElementById('question-text').textContent = "Who is older Serena or Venus Williams ?  ";
        document.getElementById('aAnswer').textContent = "Serena";
        document.getElementById('bAnswer').textContent = "Venus";
        answer = 2; 
      break;
    case 2:
        document.getElementById('question-text').textContent = "40-40 is also know as ? ";
        document.getElementById('aAnswer').textContent = "Duece";
        document.getElementById('bAnswer').textContent = "Advantage";
        answer = 1; 
      break;
    case 3:
       document.getElementById('question-text').textContent = "What surface is Wimbledon played on ? ";
       document.getElementById('aAnswer').textContent = "Clay";
       document.getElementById('bAnswer').textContent = "Grass";
       answer = 2; 
      break;
    case 4:
        document.getElementById('question-text').textContent = "An unreturned Serve is know as ? ";
        document.getElementById('aAnswer').textContent = "Ace";
        document.getElementById('bAnswer').textContent = "Jack";
        answer = 1; 
      break;
    case 5:
        document.getElementById('question-text').textContent = "Which male player leads the Grand Slam race ? ";
        document.getElementById('aAnswer').textContent = "Novak Djokovic";
        document.getElementById('bAnswer').textContent = "Rafael Nadal ";
        answer = 2; 
      break;
    case  6:
        document.getElementById('question-text').textContent = "Welcome to the Tennis Grand Slam Quiz";
        answer = 2; 
    default :  alert ('Unknown Error Occurred - PLease Restart Game');
}}


function sButton(){

    qSeq = qSeq + 1 ;
    myFunction()
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
    
}


