
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
function johnLennonFacts(pop)    { 
var result= [];  
var i = 0;  
while(i < pop.length) { 
result.push(pop[i] + '!!!') 
i++;  
} 
return result 
}

