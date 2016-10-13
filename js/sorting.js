var score=0;
var sortedCopy = playerCards.slice(0).sort(function(a,b){
    return a.value - b.value;
})


for( var i = 0; i < sortedCopy.length; i++){
    if(score + sortedCopy[i].value > 21 && sortedCopy[i].value === 11){
     score+=1;
    } else{
      score+= sortedCopy[i].value;
    }
}
