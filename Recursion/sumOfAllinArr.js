function sum(n){
  if(n===0)return arr[0];
  return arr[n]+sum(n-1)
}
let arr=[0];
let ans=sum(arr.length-1);
console.log(ans);
