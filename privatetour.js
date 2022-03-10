const popupbtn=document.querySelector("#getstarted")
      const form=document.querySelector(".popupform")
      const black=document.querySelector("#privateform")
      const closebtn=document.querySelector(".close-btn")
      popupbtn.addEventListener('click',()=>{
        form.classList.remove("d-none")
        black.classList.remove("d-none")
      })
      closebtn.addEventListener('click' ,()=>{
        form.classList.add("d-none")
        black.classList.add("d-none")
      })
      black.addEventListener("click",()=>{
          form.classList.add("d-none")
        black.classList.add("d-none")
      })