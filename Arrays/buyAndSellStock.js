function stock(arr){
  let minProfit=arr[0];
  let maxProfit=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]<minProfit){
      minProfit=arr[i]
  }
  if(arr[i]-minProfit>maxProfit){
    maxProfit=arr[i]-minProfit;
  }
  }
  return maxProfit;

}
let arr=[1,3,5,6,8];
let ans=stock(arr);
console.log(ans);
