import fetchData from "./Ajax.js"

  

////////// show/hidden new account box
const overflowBox = document.querySelector(".overflow");
const createAccBox = document.querySelector(".create-account-box");
const closeBtn = document.querySelector(".close-btn");
const newAccBtn = document.querySelector(".new-account-btn");

const showHideNewAcc = () => {
  overflowBox.classList.toggle("show-overflow");
  createAccBox.classList.toggle("show-new-account");
};

newAccBtn.addEventListener("click", showHideNewAcc);
closeBtn.addEventListener("click", showHideNewAcc);

////////// New account box
// On focusin && On focusout
const inputs = document.querySelectorAll("form input");
console.log("inputs = ", inputs);
inputs.forEach((el) => {
  el.addEventListener("focusin", () => {
    document.querySelector(`label[for=${el.id}] span`).style = `
			transform: translate(-10%, -160%); 
			color: rgb(18, 153, 242); 
 			font-size: 1.2rem; 
		`;
  });
  el.addEventListener("focusout", () => {
    if (el.value.length < 1)
      document.querySelector(`label[for=${el.id}] span`).style = "";
    else
      document.querySelector(`label[for=${el.id}] span`).style = `
			transform: translate(-10%, -160%);
			color: rgb(83, 100, 113);
			font-size: 1.2rem; 
		`;
  });
});

// fix some bug when mouse hover on input
document.querySelectorAll("label span").forEach((el) => {
  el.addEventListener("mouseover", () => {
    el.nextElementSibling.style.backgroundColor = "rgba(142, 210, 255, 0.277)";
  });
  el.addEventListener("mouseleave", () => {
    el.nextElementSibling.style.backgroundColor = "";
  });
});

// input

const overflowBoxx = document.querySelector(".overfloww");
const createAccBoxx = document.querySelector(".login-account-box");
const closeBtnn = document.querySelector(".closee-btn");
const newAccBtnn = document.querySelector(".sign-account-now");

const showHideNewAccc = () => {
  overflowBoxx.classList.toggle("show-overflowww");
  createAccBoxx.classList.toggle("show-new-accounttt");
};

newAccBtnn.addEventListener("click", showHideNewAccc);

closeBtnn.addEventListener("click", showHideNewAccc);

////////// New account box
// On focusin && On focusout
const inputss = document.querySelectorAll(".singnin-form input");
// console.log(inputss);
inputss.forEach((el) => {
  el.addEventListener("focusin", () => {
    document.querySelector(`label[for=${el.id}] span`).style = `
			transform: translate(-10%, -160%); 
			color: rgb(18, 153, 242); 
 			font-size: 1.2rem; 
		`;
    // console.log("element = ", el);
    
  });
  el.addEventListener("focusout", () => {
    if (el.value.length < 1)
      document.querySelector(`label[for=${el.id}] span`).style = "";
    else
      document.querySelector(`label[for=${el.id}] span`).style = `
			transform: translate(-10%, -160%);
			color: rgb(83, 100, 113);
			font-size: 1.2rem; 
		`;
  });
});
let localUserData ={}
var signinSubmit =document.getElementById("signinSubmit")
signinSubmit.addEventListener("click",signinSubmitOnClick)
function signinSubmitOnClick(){
  let localUserData ={}
  inputss.forEach((el) => {
  switch (el.type) {
    case "email":
      localUserData.email = el.value

      
      break;
    case "password":
      localUserData.password = el.value
      
      break;
  
    default:
      break;
  }

  }) 
  console.log(localUserData)
    fetchData((userDataServer)=>{findIdUser(userDataServer,localUserData)})
 
  
   
}
function findIdUser(userDataServer,localUserData){
let userFind = false
 userFind =  userDataServer.find((user)=>{
  
   return localUserData.email ==user.email
    
  })
 
  if(userFind){
    location.replace("home.html")
    localStorage.setItem("localUserData",JSON.stringify(userFind))
  }else{
    throw "user email not found"
  }
}


window.addEventListener("error",(errEv)=>{
  errEv.preventDefault()
  console.log(errEv.error)
}
  
)