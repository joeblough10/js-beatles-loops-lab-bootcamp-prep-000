
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < 4; i++) {
      array.push(`${musicians[i]} plays ${instruments[i]}`);
    }
  return array;
}



  var facts = [ 
"He was the last Beatle to learn to drive", 
"He was never a vegetarian", 
"He was a choir boy and boy scout", 
"He hated the sound of his own voice"]; 
function johnLennonFacts(array)    { 
var array= [];  
var i = 0;  
while(i < 4) { 
array.push(facts[i] + '!!!') 
i++;  
} 
return array 
}

