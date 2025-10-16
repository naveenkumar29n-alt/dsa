function countNeg(arr){
  let count=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]<0){
      count++
    }
  }
  return count
}


let arr=[10,-20,30];
let ans=countNeg(arr);
console.log(ans);
