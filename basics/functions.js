function hi(name){
   console.log("hello  "+name);
  
}



function add(a,b){
  return a+b;
}

let c=add(10,20);


function vote(age){
  if(age<0)console.log("under age");
  else if(age<18)console.log("not eligible");
  else console.log("eligible");
}

vote(25)