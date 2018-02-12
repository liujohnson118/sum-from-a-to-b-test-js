function printItems(array) {
  for (item of array) {
    if(Array.isArray(item)){
      printItems(item);
    }else{
      console.log(item);
    }
  }
}


function sumArrays(array){
  var sum = 0;
  for (item of array){
    if(Array.isArray(item)){
      sum += sumArrays(item);
    }else{
      sum += item;
    }
  }
  return sum;
}

const array = [1,[2,3,7,[9,11]],4,5];
console.log(sumArrays(array));