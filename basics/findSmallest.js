function findMin(arr){
  let min=Infinity;
  for(let i=0;i<arr.length;i++){
    if(arr[i]<min){
      min=arr[i];
    }
  }
  return min;
}

let arr=[10,20,3,40];
let ans=findMin(arr);
console.log(ans);
