function concat(array1, array2) {
   
  let answer = array1; 

  for (let x = 0; x < array2.length; x++) {
      answer.push(array2[x]);
  
 } return answer;
}
  


console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]));
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]));
console.log(concat([], [ 9, 7, 2 ]));
console.log(concat([ 5, 10 ], []));