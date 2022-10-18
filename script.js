const body = document.querySelector('body'),
      slidebar = body.querySelector('nav2'),
      toggle = body.querySelector(".toggle");
     
     


toggle.addEventListener("click" , () =>{
    slidebar.classList.toggle("close");
});

