let btn_main = document.querySelector(".btn_main")
let box = document.querySelectorAll(".box")
let selector = document.querySelectorAll(".selector")
let massage_box = document.querySelector(".massage_box")



btn_main.addEventListener("click",() =>{

    window.location.href = "https://devilenta.github.io/project_iman/shopping.html";
    
})



box.forEach((box_click)=>{
    
    window.addEventListener("load",function(){
        if(window.outerWidth <= 985){

            // box_click.style.transform = "translateX(236%)"
        }else{

            box_click.style.transform = "translateX(250%)"
        }
        

        
    })
    

    box_click.addEventListener("mousemove",function(){


        box_click.classList.add("box_selected")
        
    })


    box_click.addEventListener("starttouch",function(){

        
            box_click.classList.remove("box_selected")


        box_click.classList.add("box_selected")
        
    })
   

    box_click.addEventListener("mouseleave",function(){


        box_click.classList.remove("box_selected")
        
    })



    box_click.addEventListener("click",function(){
       
        
        show_phone_massage_box(box_click)
        remove_selected_func(selector ,box_click)
        move_box_func(box, box_click )
        
    })
    
    
    
    
    
})

function show_phone_massage_box(box_click){
    massage_box.innerHTML=box_click.children[1].children[1].innerHTML
    

}



 
function remove_selected_func(circle , box_click){

    circle.forEach(function(gh){


        gh.classList.remove("selector_main")
    })
    circle[box_click.dataset.a].classList.add("selector_main")
}
///////////////////////////////////////////////////////
function move_box_func(box , box_click){
    

    box.forEach(function(ghum){
       
        if(window.outerWidth <= 985){

          


        }else{


            
            
        if(box_click.dataset.a == 1){
            
            
            ghum.style.transform = "translateX(0vw)"
            
            
        }
        
        if(box_click.dataset.a == 2){
            
            
            ghum.style.transform = "translateX(125%)"
            
            
        }
        
        
        if(box_click.dataset.a == 3){
            
            
            ghum.style.transform = "translateX(250%)"
            
        }
        
        if(box_click.dataset.a == 4){
            
            
            ghum.style.transform = "translateX(375%)"
            
            
        }
        
        if(box_click.dataset.a == 5){
            
            
            ghum.style.transform = "translateX(500%)"
            
            
        }
        
    }
        
        //  if(box_click.dataset.a == 7){
            
        
        //     ghum.style.transform = "translateX(0%)"
    
        //   }

        })
}