/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

console.log("JavaScript is amazing!");

function sgpa(){
  b1.style.visibility = 'visible';
  document.getElementById('ind').innerHTML = 'Continue to calculate Semester GPA'; 
}

function cgpa(){
  b2.style.visibility = 'visible';
  document.getElementById('ind').innerHTML = 'Continue to calculate Cummulative GPA'; 
}

function rst(){
  b1.style.visibility = 'hidden';
  b2.style.visibility = 'hidden';
  document.getElementById('ind').innerHTML = 'Select one of the given options to calculate grade point average.'; 
}

function myFunc1(){
  var x = (10 + 12)/10;
  document.getElementById('sgpav').innerHTML = x;
}

function myFunc2(){
  var y = (10+13)/10;
  document.getElementById('cgpav').innerHTML = y;
}

function myCrest(){
  r1.style.visibility = 'hidden';
  r2.style.visibility = 'hidden';
  
}