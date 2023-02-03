
	let a=570;
	let b=1109;
  let c=1053;
	if(a>b && a>c){
    console.log("a is the greatest");
  } 
	else if(b>c && b>a){
    console.log("b is the greatest");
  } 
	else{
    console.log("c is the greatest");
  }

(a>b && a>c)?console.log("a is the greatest"):(b>c && b>a)?console.log("b is the greatest"):console.log("c is the greatest");