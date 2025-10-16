let n=4;
for(let i=1;i<=n;i++){
  let row="";
  for(let j=1;j<=n;j++){
    row+="*"
  }
  console.log(row);
  
}

for(let i=1;i<=n;i++){
  let row="";
  for(let j=1;j<=i;j++){
    row+="*"  
  }
  console.log(row);
  
}

for(let i=1;i<=n;i++){
  let row="";
  for(let j=1;j<=i;j++){
    row+=j
  }
  console.log(row);
  
}

for(let i=1;i<=n;i++){
  let row="";
  for(let j=1;j<=i;j++){
    row+=i
  }
  console.log(row);
  
}

for(let i=1;i<=n;i++){
  let row="";
  for(let j=1;j<=n-i;j++){
    row+=j
  }
  console.log(row);
  
}


for(let i=0;i<n;i++){
  let row="";
  for(let j=0;j<n-(i+1);j++){
    row+=" "
  }
  for(let k=0;k<i;k++){
    row+="*"
  }
  console.log(row);
  
}


for(let i=1;i<=n;i++){
  let row="";
  let toggle=1;
  for(let j=1;j<=i;j++){
    row+=toggle;
    toggle=toggle===1?0:1
  }
  console.log(row);
  
}

  let toggle=1;
for(let i=1;i<=n;i++){
  let row="";

  for(let j=1;j<=i;j++){
    row+=toggle;
    toggle=toggle===1?0:1
  }
  console.log(row);
  
}



