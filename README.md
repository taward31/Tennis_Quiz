
---
Deployement 



---
Console Logging Used 

The below Funntion was use to log and track data via the console log -  This allowed me to follow the code and the data creation/flow and esure correct data was being created as the user interacted 

I could use the Sequence step 

function logData(){
    
    console.log(`qSeq = ${qSeq}`);
    console.log(`good count = ${gCount}`);
    console.log(`bad count = ${bCount}`);
    document.getElementById('correct-a').textContent = `Correct :  ${gCount}`;
    document.getElementById('incorrect-a').textContent = `In-Correct :  ${bCount}`;
}





---


J shint - Validator Results Initial Report 

CONFIGURE
Metrics

There are 8 functions in this file.
Function with the largest signature take 0 arguments, while the median is 0.
Largest function has 7 statements in it, while the median is 4.
The most complex function has a cyclomatic complexity value of 9 while the median is 1.

Ten warnings

- 2	'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
- 3	'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
- 4	'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
- 5	'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
- 82	'template literal syntax' is only available in ES6 (use 'esversion: 6').
- 151	'template literal syntax' is only available in ES6 (use 'esversion: 6').
- 152	'template literal syntax' is only available in ES6 (use 'esversion: 6').
- 153	'template literal syntax' is only available in ES6 (use 'esversion: 6').
- 154	'template literal syntax' is only available in ES6 (use 'esversion: 6').
- 155	'template literal syntax' is only available in ES6 (use 'esversion: 6').


Three unused variables
 - 97	sButton
 - 104	aButton
 - 113	bButton




