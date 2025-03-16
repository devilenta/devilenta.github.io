let btn_header = document.querySelectorAll(".btn_header")
let icon_group = document.querySelector(".icon_group")
let btn_shop = document.querySelector(".btn_shop")
let list_shop = document.querySelector(".list_shop")
let btn_product= document.querySelectorAll(".btn_product")
let menu_header = document.querySelector(".menu_header")
let background_menu = document.querySelector(".background_menu")
let menu = document.querySelector(".menu")
let close_image_header = document.querySelector("#close_image_header")
let back_image_header = document.querySelector("#back_image_header")
let Products_menu = document.querySelector("#Products_menu")
let row_menu = document.querySelectorAll(".row_menu")
let one = document.querySelectorAll(".one")
let sec = document.querySelectorAll(".sec")

let god_help = document.querySelector(".god_help")



// باز منو


menu_header.addEventListener("click",function(){
    
    background_menu.style.display="block"
    
    setTimeout(() => {
        menu.style.transform = "translate(20%, -2%) scale(1)"
        
        menu.style.transition = "transform 1s ease-in-out"
    }, 1);
  
})


    
// بستن منو


close_image_header.addEventListener("click",function(){
    
    
    
    
        menu.style.transition = "transform 0.5s ease-in-out"
        menu.style.transform = "translate(140%, 0%) scale(1)"
    
    setTimeout(() => {
    background_menu.style.display="none"
    }, 500);
})


// منو محصولات


// let Products_menu_nmae = ["برلیان ویژه فروشگاه ها (کامل)","برلیان ویژه حسابداران","برلیان ویژه حقوق و دستمزد","افزونه های قابل خرید نرم افزار"]


Products_menu.addEventListener("click",function(){
    
    console.log("salam");
    
    
    // setTimeout(() => {
        
        sec.forEach(function(row){
            //         row.style.transform = "translate(0%, -2%) scale(1)"
            row.classList.toggle("god_help")
        
    //     row.style.transition = "10s ease-in-out"
            
    //         row.style.display = "flex"
        })
        
    // }, 1);
    
})

// back_image_header.addEventListener("click",function(){


//     one.forEach(function(row){

//         row.style.display = "flex"
//         back_image_header.style.opacity="100%"
//     })
//     sec.forEach(function(row){
//         back_image_header.style.opacity="0%"
//         row.style.display = "none"
//     })
    
// })











icon_group.addEventListener("click",()=>{

    window.location.href = ("https://www.brilsoft.ir")
})


btn_shop.addEventListener("click",()=>{

    list_shop.classList.toggle("active")

})






// btn_product.forEach((event)=>{

//     event.addEventListener("click",()=>{

//         window.location.href = ("")
//     })

// })
