/* Declare Variables  */

let qSeq ;
let gCount;
let bCount;
let answer ; 

/* Page start Up Functionality/Loading of Data   */


document.addEventListener("DOMContentLoaded",function(){
    qSeq = 0 ;
    gCount = 0;
    bCount = 0;
    myFunction();   
    document.getElementById("aAnswer").style.display = "none";
    document.getElementById("bAnswer").style.display = "none";
  
        
});

/* Main Function that handles the Sequencing through the Quiz. */

function myFunction() {


  /* Display/Insert Live Counter values on main page  */

  document.getElementById('correct-a').textContent = `Correct :  ${gCount}`;
  document.getElementById('incorrect-a').textContent = `In-Correct :  ${bCount}`;


/* Format the buttons Dispaly Depending on the Sequence Steps  */

if (qSeq >(0) ) {

document.getElementById("bstart").style.display = "none";
 document.getElementById("aAnswer").style.display = "inline-block";
  document.getElementById("bAnswer").style.display = "inline-block";}

 
/* Case Sequence for handling respective actions per step   */

switch (qSeq) { 

  /* Case 0 -  Intro/Welcome -   */
    
    case 0:

        document.getElementById('question-text').textContent = "Welcome to the Tennis Grand Slam Quiz";
         

      break;

  /* Case 1 -  Default Counters and Load Q1 - Parameters   */

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

    /* Case 2 -   Load Q2 - Parameters   */

    case 2:

        document.getElementById('question-text').textContent = "40-40 is also know as ? ";
         document.getElementById('aAnswer').textContent = "Duece";
          document.getElementById('bAnswer').textContent = "Advantage";
           document.getElementById("q-image").src = "assets/images/duece.jpeg";
            document.getElementById("q-image").alt = "Two Tennis players in close match at Wimbledon" ;
             answer = 1; 
      break;
    case 3:

    /* Case 3 -   Load Q3 - Parameters   */

       document.getElementById('question-text').textContent = "What surface is Wimbledon played on ? ";
        document.getElementById('aAnswer').textContent = "Clay";
         document.getElementById('bAnswer').textContent = "Grass";
          document.getElementById("q-image").src = "assets/images/Wimbledon_logo.png" ;
           document.getElementById("q-image").alt = "Wimbledon Club Logo" ;
            answer = 2; 
      break;

    /* Case 4 -   Load Q4 - Parameters   */

    case 4:
        document.getElementById('question-text').textContent = "An unreturned Serve is know as ? ";
         document.getElementById('aAnswer').textContent = "Ace";
          document.getElementById('bAnswer').textContent = "Jack";
           document.getElementById("q-image").src = "assets/images/serve.jpeg";
            document.getElementById("q-image").alt = "Pro tennis players in mid serve motion"  ;
             answer = 1; 
      break;

    /* Case 5 -   Load Q5 - Parameters   */

    case 5:
        document.getElementById('question-text').textContent = "Which player leads the Grand Slam race ? ";
         document.getElementById('aAnswer').textContent = "Novak Djokovic";
          document.getElementById('bAnswer').textContent = "Rafael Nadal ";
           document.getElementById("q-image").src = "assets/images/rafa_novak.jpeg";
            document.getElementById("q-image").alt = "Rafa and Novak ready to Play tennis prematch " ;
             answer = 2; 
      break;

    /* Case 6 -   Load Quiz, Change Button Display, End Message and Results With Result Defining Picutres  */

      case 6:
        
        document.getElementById('question-text').textContent = `You Scored ${gCount} out of 5`;
         document.getElementById("bstart").style.display = "block";
          document.getElementById("aAnswer").style.display = "none";
            document.getElementById("bAnswer").style.display = "none";
        

        if (gCount > 4 ){

        document.getElementById("q-image").src = "assets/images/win_match.webp";
          document.getElementById("q-image").alt = "Rafa Nadal After winning Tennis Match " ;
           document.getElementById('bstart').textContent = "Replay Quiz ?";
        }

        else{

        document.getElementById("q-image").src = "assets/images/lose_match.jpeg";
          document.getElementById("q-image").alt = "Rodger Federer and Rafa Nadal Crying " ;
           document.getElementById('bstart').textContent = "Try Again ?";

        }



        qSeq = 0 ;
       

      break;
    
    default :  alert ('Unknown Error Occurred - Please Restart Game');
}}


function sButton(){

  qSeq = qSeq + 1 ;
   myFunction();
   
  }

function aButton(){

   chkAnswerA ();
    qSeq = qSeq + 1;
     myFunction();
  
 
  }

function bButton(){


      chkAnswerB ();
       qSeq = qSeq + 1 ;
        myFunction();
     
   
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



