let section2_feature_icon = document.querySelectorAll(".section2_feature_icon")


section2_feature_icon[2].addEventListener("click",()=>{

    
    
})
let test = document.querySelectorAll(".section2_feature_icon")




test.forEach(function(box){
    
    box.addEventListener("click",function(event){

        
        
        box.classList.add("selected_box_efect")
        if(window.outerWidth <= 985){

            box.style.width = "80%"
        }else{

            box.style.width = "30%"
        }
        box.style.height = ""
        box.style.transition = "1s"
        box.style.padding =  "10px 40px"



        
        
        
        if (box) {
            const siblings = Array.from(box.parentElement.children) 
            .filter(el => el !== box && el.tagName.toLowerCase() === 'div'); 
            
            siblings.forEach(function(yum){
                
                if(window.outerWidth <= 985){
                   
                    
                    yum.style.width = "60%"
                    yum.style.height = "60%"
                    yum.classList.remove("selected_box_efect")

                }else{

                    
                    yum.style.width = "22%"
                    yum.style.height = "22%"
                    yum.classList.remove("selected_box_efect")
                }
                
                    
                })
            
        }
        
    })
    
    
    
    
})




