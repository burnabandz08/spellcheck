  
// Spell Check Starter by Mr. V

"use strict";

// Global Variables
let dictionary;
let aliceWordsCh1;
let aliceWordsFull;

// Load Data Files into Global Variables
loadDictionary();
loadAliceCh1();
loadAliceText();

// Event Listeners
document.getElementById("linear-word-btn").addEventListener("click", linearWord);
document.getElementById("binary-word-btn").addEventListener("click", binaryWord);
document.getElementById("ch1-linear-btn").addEventListener("click", ch1Linear);
document.getElementById("ch1-binary-btn").addEventListener("click", ch1Binary);
document.getElementById("full-linear-btn").addEventListener("click", fullLinear);
document.getElementById("full-binary-btn").addEventListener("click", fullBinary);

// Event Functions

// Use a linear search to see if the user's word is in the dictionary array
function linearWord() {
  // Get user word and convert to lowercase
  let userWord = document.getElementById("word").value;
  userWord = userWord.toLowerCase();

  // Search dictionary for userWord and output result
  let searchResult = linearSearch(dictionary, userWord);
  if (searchResult == -1) {
    document.getElementById("word-result").innerHTML = "Linear Search: " + userWord + " is NOT in the dictionary.";
  } else {
    document.getElementById("word-result").innerHTML = "Linear Search: " + userWord + " IS in the dictionary.";
  }
}

// Use a binary search to see if the user's word is in the dictionary array
function binaryWord() {
  // Get user word and convert to lowercase
  let userWord = document.getElementById("word").value;
  userWord = userWord.toLowerCase();

  // Search dictionary for userWord and output result
  let searchResult = binarySearch(dictionary, userWord);
  if (searchResult == -1) {
    document.getElementById("word-result").innerHTML = "Binary Search: " + userWord + " is NOT in the dictionary.";
  } else {
    document.getElementById("word-result").innerHTML = "Binary Search: " + userWord + " IS in the dictionary.";
  }
  console.log(binarySearch(dictionary, userWord));
}


function ch1Linear() { 
  let NotInDic = 0;
  for(let i = 0; i < aliceWordsCh1.length; i++){
    let result = linearSearch(dictionary, aliceWordsCh1[i].toLowerCase());
   
    if(result == -1){
      NotInDic++;
      console.log(aliceWordsCh1[i]);
      
    }
    document.getElementById("ch1-result").innerHTML = NotInDic + "not found in the dictionary";
  }
  
}

function ch1Binary() {
  let NotInDic = 0;
  for(let i = 0; i < aliceWordsCh1.length; i++){
    let result = binarySearch(dictionary, aliceWordsCh1[i].toLowerCase());
   
    if(result == -1){
      NotInDic++;
      console.log(aliceWordsCh1[i]);
      
    }
    document.getElementById("ch1-result").innerHTML = NotInDic + "not found in the dictionary";
  }
}

function fullLinear() {
  let NotInDic = 0;
  for(let i = 0; i < aliceWordsFull.length; i++){
    let result = linearSearch(dictionary, aliceWordsFull[i].toLowerCase());
   
    if(result == -1){
      NotInDic++;
      console.log(aliceWordsFull[i]);
      
    }
    document.getElementById("full-result").innerHTML = NotInDic + "not found in the dictionary";
  }
}

function fullBinary() {
  let NotInDic = 0;
  for(let i = 0; i < aliceWordsFull.length; i++){
    let result = binarySearch(dictionary, aliceWordsFull[i].toLowerCase());
   
    if(result == -1){
      NotInDic++;
      console.log(aliceWordsFull[i]);
    }
    document.getElementById("full-result").innerHTML = NotInDic + "not found in the dictionary";
  }
}