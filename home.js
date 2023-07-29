// addEventListener("load",()=>{ 
import fetchData from "./Ajax.js"

var twitButton = document.getElementById("twitButton")
var twitTextBox = document.getElementById("twitTextBox")
var twitsLest = document.getElementById("twitsLest")
var imgAccount = document.getElementById("imgAccount")
const localUserData = JSON.parse(localStorage.getItem("localUserData"))
// var timerTwit = document.querySelector("#timerTwit") 
imgAccount.setAttribute("src",localUserData.src)
// var twitValidationMessage = document.querySelector("#twitValidationMessage")
twitTextBox.value = ""

 
 function createTwitPost(userName,imgSrc,paragraph){

   var newTwitDiv = document.createElement("div")
   var imgTwitPerson = document.createElement("img")
   var newTwitDivBody = document.createElement("div")
   newTwitDiv.classList.add("posts")
   imgTwitPerson.classList.add("post-img")
   imgTwitPerson.src = imgSrc
   newTwitDivBody.classList.add("feed-details")
   newTwitDiv.appendChild(imgTwitPerson)
   newTwitDiv.appendChild(newTwitDivBody)
   ///////////////////////
   var newTwitDivBodyDetails = document.createElement("div")
   var newTwitDivBodyDetailsA = document.createElement("a")
   var newTwitDivBodyDetailsAname = document.createElement("span")
   var newTwitDivBodyDetailsAUsername = document.createElement("span")
   var newTwitDivBodyDetailsmoreHoriz = document.createElement("a")
    ///////////
    newTwitDivBodyDetailsAname.innerHTML = userName
    newTwitDivBodyDetailsAUsername.classList.add("tweeter-username")
   //  newTwitDivBodyDetailsAUsername.innerHTML = `${hrefLinkUserHome} <sup>.</sup> ${time}`
    newTwitDivBodyDetailsA.classList.add("tweeter-nam")
    newTwitDivBodyDetailsA.appendChild(newTwitDivBodyDetailsAname)
    newTwitDivBodyDetailsA.appendChild(newTwitDivBodyDetailsAUsername)
     ///////////
     newTwitDivBodyDetailsmoreHoriz.classList.add("material-icons-outlined","span-more")
     newTwitDivBodyDetailsmoreHoriz.innerHTML = "more_horiz"
     newTwitDivBodyDetails.classList.add("tweeter-details")
     newTwitDivBodyDetails.appendChild(newTwitDivBodyDetailsA)
     newTwitDivBodyDetails.appendChild(newTwitDivBodyDetailsmoreHoriz)
     newTwitDivBody.appendChild(newTwitDivBodyDetails)
   ///////////////////
   var newTwitDivBodyText = document.createElement("div")
   newTwitDivBodyText.classList.add("twt-txt")
   var newTwitDivBodyTextP = document.createElement("p")
   newTwitDivBodyTextP.innerHTML = paragraph
   
   newTwitDivBodyText.appendChild(newTwitDivBodyTextP)
   newTwitDivBody.appendChild(newTwitDivBodyText)
  
  ////////////
  var newTwitDivBodyIcons = document.createElement("div")
  newTwitDivBodyIcons.classList.add("icons-twt")
  var icons =["chat_bubble_outline","restart_alt","favorite_border","upload"]
  for (let icon of icons) {
     let newTwitDivBodyIconsIcon = document.createElement("span")
     newTwitDivBodyIconsIcon.classList.add("material-icons-outlined","span-more")
     newTwitDivBodyIconsIcon.innerHTML = icon
     newTwitDivBodyIcons.appendChild(newTwitDivBodyIconsIcon)
  }
  newTwitDivBody.appendChild(newTwitDivBodyIcons)
  ////////////////
  return {newTwitDiv , newTwitDivBodyDetailsAUsername}
   
  
}

function addTwit (){
   let timeNow = new Date()
  
   const {newTwitDiv , newTwitDivBodyDetailsAUsername} =createTwitPost(localUserData.name,localUserData.src,twitTextBox.value )
   newTwitDivBodyDetailsAUsername.innerHTML = `@codejoke <sup>.</sup> 0m`
  
 
   
    setInterval(()=>{ 
         
   let hour = new Date().getMinutes() - timeNow.getMinutes()
  let minutes = new Date().getMinutes() - timeNow.getMinutes()
   if(minutes<0){
      --hour
      minutes -=60
      
   }

   newTwitDivBodyDetailsAUsername.innerHTML = `@codejoke <sup>.</sup> ${minutes}m`

   },10000)
   
   twitsLest.prepend(newTwitDiv)
   
 if(twitTextBox.value != 0){
   twitButton.removeEventListener("click",addTwit)
 }

 
 setTimeout(()=>{
    twitButton.addEventListener("click",addTwit)
   //  clearInterval(stopIntervalTwitBox)
   //  timerTwit.innerHTML=""
   //  timer = 2
 },5000)
 ////////////
//  timerTwit.innerHTML =1
//  let timer =2

//  var stopIntervalTwitBox = setInterval(()=>{
//     timerTwit.innerHTML =timer++
    
//  },1000)
/////////////
 

}
function twitValidation (){
    
   var twitText = twitTextBox.value
   twitButton.addEventListener("click",addTwit)
   // twitValidationMessage.innerHTML = ""
   if(twitText.length >50||twitText.length==0){
      
      
      twitButton.removeEventListener("click",addTwit)
   //  twitValidationMessage.style.color = "red"
   //  twitValidationMessage.innerHTML = "Max lenght 30 letter"
    
   }
}

twitButton.addEventListener("click",twitValidation)
twitButton.addEventListener("click",addTwit)
twitButton.addEventListener("click",()=>{
   twitButton.addEventListener("click",addTwit)
})


function creatfetchTwit(userDataServer,paragraphDataServer){
   for (let i=0; i<userDataServer.length*3 ;i++) {
      
      let randomUserID = Math.ceil(Math.random()*userDataServer.length)
     let randomUserPost =   Math.ceil(Math.random()*paragraphDataServer.length)

          let randomUser = userDataServer[randomUserID-1]
      
      
      let userParagraph =  paragraphDataServer.find((twit) => {
        return(twit.id == randomUserPost) 
        });
    

        let randomTime = Math.floor(Math.random()*12)  
        let time
        if(randomTime==0){
           randomTime = Math.ceil(Math.random()*55) 
              time = `${randomTime}m`
        }else{
            time =`${randomTime}h`
        }
        
       const {newTwitDiv , newTwitDivBodyDetailsAUsername} =createTwitPost(randomUser.name,randomUser.src,userParagraph.title)
       newTwitDivBodyDetailsAUsername.innerHTML =`${randomUser.handleuser} <sup>.</sup> ${time}`
        twitsLest.appendChild(newTwitDiv)
    }
    

}
console.log(fetchData)

fetchData(creatfetchTwit)
   
   addEventListener("scroll",()=>{
      

      if(document.documentElement.scrollTop ==(document.documentElement.scrollHeight - window.innerHeight)){
      fetchData(creatfetchTwit)
   } })





  


// })
