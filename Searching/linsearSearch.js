function search(arr,target){
  for(let i=0;i<arr.length;i++){
    if(arr[i]===target){
      return i;
    }
  }
  return -1;
}
let arr=[10,20,30,40];
let ans=search(arr,30);
console.log(ans);
