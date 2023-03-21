const target = document.body;
const id = setInterval(()=>{
    const green = Math.round((Math.random()*266));
    const red = Math.round((Math.random()*266));
    const blue = Math.round((Math.random()*266));
    target.style.backgroundColor = `rgb(${red},${blue},${green})`;
    target.style.background = `rgb(${red},${blue},${green})`;
},1000);
const btn = document.querySelector("button");
btn.addEventListener("click",()=>{
    clearInterval(id);
    btn.textContent = target.style.background;
})
