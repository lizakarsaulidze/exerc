const btns = document.querySelectorAll(".btnclick");

btns.forEach(function(btn){
    btn.addEventListener("click",function(){
        btn.classList.add("hide")
    })
})