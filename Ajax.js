import {createTwitPost,twitsLest} from "./home.js"
let divTest =  document.querySelector(".second-div.section")
addEventListener("load",()=>{ 
   fetchData()
   setInterval(()=>{


      if(document.documentElement.scrollTop ==(document.documentElement.scrollHeight - window.innerHeight)){
      fetchData()
   } },2000)
   

})
 function fetchData(){
let paragraphDataServer=[]
let userDataServer=[]
let xhttp = new XMLHttpRequest()
    xhttp.open("Get", "https://jsonplaceholder.typicode.com/posts", true)
    xhttp.send()
 xhttp.onreadystatechange = function (){
    if (this.status == 200 && this.readyState == 4) {
         paragraphDataServer = JSON.parse(this.responseText)
        
            let xhttp = new XMLHttpRequest()
            xhttp.open("Get", "./users.json", true)
            xhttp.send()
         xhttp.onreadystatechange = function (){
            if (this.status == 200 && this.readyState == 4) {

                 userDataServer = JSON.parse(this.responseText)
                
                console.log(userDataServer)
                console.log(paragraphDataServer)
             
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
        
         } 
        
            
        
        

    }

 }}