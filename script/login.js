let userInput = document.querySelector("#userInput")
let passInput = document.querySelector("#passInput")
let phoneInput = document.querySelector("#phoneInput")
let regester = document.querySelector("#regester")
let sub = document.querySelector("#sub")
let massage_login_image = document.querySelector("#massage_login_image")
let massage_login_text = document.querySelector("#massage_login_text")










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
        
        
         
         form_login.style.height ="55vh"
         form_login.style.maxHeight = "600px"
        phoneInput.style.display = "block"
          box_form_login.style.margin = "-17vh auto"

              massage_login_image.style.transform = "scaleX(0) scaleY(0)"
           massage_login_image.style.transition =  "0.5s"
           
                 massage_login_text.style.transform = "scaleX(0) scaleY(0)"
           massage_login_text.style.transition =  "0s"
    }else{
        console.log("ثبت نام شدید");

        fetch("https://data-base-beerlian-default-rtdb.europe-west1.firebasedatabase.app/users.json",{
            method : "POST",
            headers : {"content-type" : "application/json"},
            body : JSON.stringify(userdata)
        })
        clear_data()

            massage_login_image.style.transform = "scaleX(1) scaleY(1)"
           massage_login_image.style.transition =  "0.5s"
           
                 massage_login_text.style.transform = "scaleX(1) scaleY(1)"
           massage_login_text.style.transition =  "0s"

           massage_login_text.innerHTML = "ثبت نام شدید"

        flag_loggin = false
 
         form_login.style.height ="40vh"
         form_login.style.maxHeight = "400px"
        phoneInput.style.display = "none"
          box_form_login.style.margin = "0 auto"

        
    }
    
    
   
})

sub.addEventListener("click",(event)=>{

    event.preventDefault()
        
        
    if(flag_loggin == false){
        


        fetch("https://data-base-beerlian-default-rtdb.europe-west1.firebasedatabase.app/users.json")

        .then(res=>res.json())
        .then(data=>Object.entries(data))
        .then(yum =>{
            yum.forEach(ghum=>{

                 massage_login_image.style.transform = "scaleX(1) scaleY(1)"
           massage_login_image.style.transition =  "0.5s"
           
                 massage_login_text.style.transform = "scaleX(1) scaleY(1)"
           massage_login_text.style.transition =  "0s"

                if(ghum[1].userInput.toLowerCase() == userInput.value.toLowerCase() && ghum[1].passInput== passInput.value){

                    massage_login_text.innerHTML = "خوش آمدید"
                    console.log(ghum[1].userInput);
                    localStorage.setItem('username', ghum[1].userInput);

                    setTimeout(function(){

                        window.location.href = "http://www.beerlian.ir/index.html"
                    },2000
                    )
                    
                    
                    
                }else if(!userInput.value || !passInput.value){

                    massage_login_text.innerHTML = "فیلد پر کنید"


                }
                
                
                else{

                                        massage_login_text.innerHTML = "نام کاربری یافت نشد"

                    
                }

                
                
            })
            
            
        }
    
        )

        
        
        
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