function lastIndexOf(array,num) {
  for (let x = array.length; x > 0; x--) {
    if (array[x -1] === num) {
      return x -1;
    } 
}return -1 

}


console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1));