const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(todoInput.value.trim()){
        const ul = document.querySelector(".todo-list");
        const li = document.createElement("li");
        li.innerHTML = `<span class="text">${todoInput.value}</span>
        <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
        </div>`;
        ul.append(li);
        todoInput.value="";
    }
})

const click = document.querySelector(".todo-list");
click.addEventListener("click",(e)=>{
    const target  = e.target;
    const parent = target.parentNode.parentNode;
    if(e.target.classList.contains("done")){
        const item = parent.querySelector("span");
        item.style.textDecoration = "line-through";
    }
    if(e.target.classList.contains("remove")){
        parent.remove();
    }
})


