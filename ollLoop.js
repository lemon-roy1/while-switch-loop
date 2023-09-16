// for loop question to anser0,1,2,3,4,5 

for (let i = 0; i < 25; i++) {
    console.log(i);
    if (i === 5) {
      break;
    }
  }
  
  // while loop question anser 1,2,3,4,5
  
  let i = 0;
  while (i < 20) {
    if (i === 5) {
      break;
    }
    i = i + 1;
    console.log(i);
  }
  
  
  // switch loop question anser golden(other)
  
  let b = 100;
  
  switch (true) {
    case b >= 100:
      console.log("golden");
      break;
    case b >= 90:
      console.log("A+");
      break;
    case b >= 80:
      console.log("A-");
      break;
    case b >= 70:
      console.log("B");
      break;
    case b >= 60:
      console.log("C");
      break;
    case b >= 50:
      console.log("D");
      break;
    case b >= 40:
      console.log("E");
      break;
    case b >= 30:
      console.log("F");
      break;
  
  }