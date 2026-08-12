const scores = [10,12,13,14,15,16,17,18,11,19];
  console.log("scores",scores);
let total = 0;
for(i=0;i < scores.length;i++){
total = total + scores[i];
}

const average = total / scores.length;
//console.log("Total scores",total); was sent down for printing
console.log("average",average);
console.log("Total scores",total);

let highest = scores[0];
let lowest = scores[0];

for( const score of scores){
  if (score > highest){
  highest = score;
  }
  if(score < lowest){
  lowest = score;
  }
}  
console.log("highest score",highest);
console.log("lowest score",lowest);

let passed = scores[0];
let failed = scores[0];

for (const score of scores){
  if (score >= 10){
    
  }
}