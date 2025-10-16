function remove(arr,val){
  let x=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]!=val){
      arr[x]=arr[i];
      x++;
    }
  }
  return x;
}

let arr=[1,2,2,3];
let ans=remove(arr,2);
console.log(ans);
