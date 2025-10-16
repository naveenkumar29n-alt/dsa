function missing(arr){
  let n=arr.length;
  let totalSum=n*(n+1)/2;
  let partialSum=0;
  for(let i=0;i<n;i++){
    partialSum+=arr[i]
  }
  return totalSum-partialSum;
}

let arr=[0,1,3];
let ans=missing(arr);
console.log(ans);
