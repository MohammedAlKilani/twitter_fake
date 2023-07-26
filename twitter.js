addEventListener("load",()=>{
var twitButton = document.getElementById("twitButton")
var twitTextBox = document.getElementById("twitTextBox")
var twitsLest = document.getElementById("twitsLest")
var article = document.querySelector("article")
var timerTwit = document.querySelector("#timerTwit")
var twitValidationMessage = document.querySelector("#twitValidationMessage")
twitTextBox.value = ""
function addTwit (){
 var newTwitDiv = document.createElement("div")
 var imgTwitPerson = document.createElement("img")
 var newTwitP = document.createElement("p")
 var newTwitPText = document.createTextNode(twitTextBox.value)
 newTwitDiv.style.margin = "auto"
 newTwitDiv.style.width = "30vw"
 newTwitDiv.style.background = "#91C8E4"
 imgTwitPerson.src = ""
 imgTwitPerson.alt = "img_tPerson"
 imgTwitPerson.width = "50"
 imgTwitPerson.height = "50"
 imgTwitPerson.style.borderRadius = "50%"
 imgTwitPerson.style.backgroundColor = "#4682A9"
 newTwitP.appendChild(newTwitPText)
 newTwitDiv.appendChild(imgTwitPerson)
 newTwitDiv.appendChild(newTwitP)
 twitsLest.prepend(newTwitDiv)

 twitButton.removeEventListener("click",addTwit)
 setTimeout(()=>{
    twitButton.addEventListener("click",addTwit)
    clearInterval(stopIntervalTwitBox)
    timerTwit.innerHTML=""
    timer = 2
 },5000)
 ////////////
 timerTwit.innerHTML =1
 let timer =2

 var stopIntervalTwitBox = setInterval(()=>{
    timerTwit.innerHTML =timer++
    
 },1000)
/////////////
 

}
function twitValidation (event){
    
   var twitText = event.target.value
   twitButton.addEventListener("click",addTwit)
   twitValidationMessage.innerHTML = ""
   if(twitText.length >30){
      twitButton.removeEventListener("click",addTwit)
    twitValidationMessage.style.color = "red"
    twitValidationMessage.innerHTML = "Max lenght 30 letter"
    
   }
}
twitButton.addEventListener("click",addTwit)
twitTextBox.addEventListener("keydown",twitValidation)














})