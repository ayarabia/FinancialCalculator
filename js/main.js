const userinput = document.getElementsByClassName("input");
const calabrand = document.getElementById("calabrand");
var unlimited=document.getElementById("Unlimited")
var lifetime=document.getElementById("Lifetime")
var error=document.getElementById("error")
let brandvalue;
function checkisNumber() {
  var arr = [];

  for (let i = 0; i < userinput.length; i++) {
    if (!isNaN(parseInt(userinput[i].value))) {
      
   
   
      arr.push(parseInt(userinput[i].value));
      // console.log(arr);
        error.innerHTML=``

    }
  
  }
  return arr;
}
function fixedValue(){
  console.log("jj");
 
  var sum = 0;
    var rewardes = checkisNumber();
    let unlimetedvalue;
    let lifetimevalue ;
  if (rewardes.length === 4) {
    for (let i = 0; i < rewardes.length; i++) {
      sum = sum + rewardes[i];
      unlimetedvalue = sum *11
      lifetimevalue=sum*1.2
      unlimited.innerHTML = `$ ${unlimetedvalue}`;
     lifetime.innerHTML = ` $ ${lifetimevalue }`;
   
    }
  }
  else {
  unlimited.innerHTML = ``;
    lifetime.innerHTML = ``;
  }
}

function calc(brandName) {
  var sum = 0;
  var rewardes = checkisNumber();
  // let brandvalue;
  if (rewardes.length === 4) {
    for (let i = 0; i < rewardes.length; i++) {
      sum = sum + rewardes[i];
      if(brandName=="brex"){
        brandvalue = sum * 0.3;
        calabrand.innerHTML = `Brex Business Card $ ${brandvalue}`;
     
      }else if(brandName=="stripe"){
        brandvalue = sum *2.9
        calabrand.innerHTML = `Stripe Business Card $ ${brandvalue}`;
       
      }else if(brandName=="amex"){
        brandvalue = sum * 1.3
        calabrand.innerHTML = `Amex Business Card $ ${brandvalue}`;
      
      }
     
    }
  }
  else{
    error.innerHTML=`Enter Valid Number`
  }
 
}
// function calcBrex() {
//   var sum = 0;
//   var rewardes = checkisNumber();
//   let brex;
//   if (rewardes.length === 4) {
//     for (let i = 0; i < rewardes.length; i++) {
//       sum = sum + rewardes[i];
//       brex = sum * 0.3;
//       calabrand.innerHTML = `Amex Business Card $ ${brex}`;
//     }
//   } else {
//     alert("Enter valid number");
//   }
// }
// function calcStripe() {
//     var sum = 0;
//     var rewardes = checkisNumber();
//     let strip;
//     if (rewardes.length === 4) {
//       for (let i = 0; i < rewardes.length; i++) {
//         sum = sum + rewardes[i];
//         strip = sum *2.9
//         calabrand.innerHTML = `Stripe Business Card $ ${strip}`;
//       }
//     } else {
//       alert("Enter valid number");
//     }
//   }
//   function calcAmex() {
//     var sum = 0;
//     var rewardes = checkisNumber();
//     let amex;
//     if (rewardes.length === 4) {
//       for (let i = 0; i < rewardes.length; i++) {
//         sum = sum + rewardes[i];
//         amex = sum * 1.3
//         calabrand.innerHTML = `Amex Business Card $ ${amex}`;
//       }
//     } else {
//       alert("Enter valid number");
//     }
//   }
