const toggle = document.body;
const target = document.querySelector(".toggle-theme");
target.addEventListener("click",()=>{
    if(target.textContent==="Dark Mode"){
        target.textContent="Light Mode";
    }else{
        target.textContent="Dark Mode";
    }
    toggle.classList.toggle("dark-mode");
})