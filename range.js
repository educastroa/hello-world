
function range(start, end, step) {
  let answer = [];
  
  if (start < end) {
    for (let x = start; x <= end; x = x + step) {
      
      answer.push(x);
  }
} else if (start > end) {
  for (let x = start; x >= end; x = x - step) {
    
    answer.push(x);
    }
}
  return answer;
}

console.log(range(140, 30, 10));

