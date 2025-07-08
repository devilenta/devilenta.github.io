let userInput = document.querySelector("#userInput")
let passInput = document.querySelector("#passInput")
let phoneInput = document.querySelector("#phoneInput")
let regester = document.querySelector("#regester")
let sub = document.querySelector("#sub")
let massage_login_image = document.querySelector("#massage_login_image")










let box_form_login = document.querySelector(".box_form_login")
let form_login = document.querySelector(".form_login")





// true_height = getComputedStyle(form_login).height;
let flag_loggin = false;

userInput.addEventListener("focus",()=>{
    
    
    userInput.placeholder = ""

})

userInput.addEventListener("blur",()=>{
    console.log("نام کاربری");
    
    userInput.placeholder = "نام کاربری"

})

passInput.addEventListener("focus",()=>{
    
    
    passInput.placeholder = ""

})

passInput.addEventListener("blur",()=>{
    
    passInput.placeholder = "رمز عبور"

})




regester.addEventListener("click",(event)=>{

    let userdata = {
        userInput : userInput.value,
        passInput : passInput.value,
        phoneInput : phoneInput.value,
    }
    
    console.log(userdata);
  

        event.preventDefault()
    
      
        
    if(flag_loggin == false){
        flag_loggin= true
        console.log(flag_loggin);
        
        
         
         form_login.style.height ="50vh"
         form_login.style.maxHeight = "600px"
        phoneInput.style.display = "block"
          box_form_login.style.margin = "-17vh auto"
    }else{
        console.log("ثبت نام شدید");
        
        //  form_login.style.height ="40vh"
        //  form_login.style.maxHeight = "400px"
        // phoneInput.style.display = "none"
        //   box_form_login.style.margin = "0 auto"
        fetch("https://data-base-beerlian-default-rtdb.europe-west1.firebasedatabase.app/users.json",{
            method : "POST",
            headers : {"content-type" : "application/json"},
            body : JSON.stringify(userdata)
        })
        clear_data()
    }
    
    
   
})

sub.addEventListener("click",(event)=>{

    event.preventDefault()
        
        
    if(flag_loggin == false){
        
        
        
        console.log("ورود کردید");
         massage_login_image.style.transform = "scaleX(1) scaleY(1)"
           massage_login_image.style.transition =  "0.5s"

        fetch("https://data-base-beerlian-default-rtdb.europe-west1.firebasedatabase.app/users.json")

        .then(res=>res.json())
        .then(data=>Object.entries(data))
        .then(yum =>console.log(yum))
        
    }else{
        flag_loggin = false
        console.log("به قسمت ورود رفتید");
        
        
         form_login.style.height ="40vh"
         form_login.style.maxHeight = "400px"
        phoneInput.style.display = "none"
          box_form_login.style.margin = "0 auto"
        
    }

})


function clear_data(){


userInput.value = ""
passInput.value = ""
phoneInput.value = ""

}