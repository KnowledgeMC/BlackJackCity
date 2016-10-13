var total=0;
var sortedCopy = playerCards.slice(0).sort(function(a,b){
    return a.value - b.value;
})


for( var i = 0; i < sortedCopy.length; i++){
    if(total + sortedCopy[i].value > 21 && sortedCopy[i].value === 11){
     total+=1;
    } else{
      total+= sortedCopy[i].value;
    }
}
