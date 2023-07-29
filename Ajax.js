let divTest =  document.querySelector(".second-div.section")
// let fetchDataExport
// addEventListener("load",()=>{ 
   
   


 function fetchData(fun){
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
               
                fun(userDataServer,paragraphDataServer)
           
             }
                
        
         } 
        
            
        
        

    }

 }} 
  
// })

export  default fetchData