function largest(arr){
  let max=-Infinity;
  for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
      max=arr[i]
    }
  }
  return max;
}


let arr=[10,20,30,7];
let ans=largest(arr);
console.log(ans);
