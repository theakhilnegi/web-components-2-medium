//------keyup work when we release our finger from key and input work when we press the key------
//------keypress is not use its bit buggy and some people also use keydown and all almost do same work but we use input keyup sometime not detected. change work when we shift our focus or click outside the target------
//------debounce function is a function which take a function and time, when user called function quicker that the given time, debounce do not let execute that fucntion which decrease the calling og function unnecessary------

//------example of decorator function------
// function decorator(func){
//     return function(...args){
//         console.log("you are calling decorator",func.name);
//         func.call(this,...args);
//     };
// }
// function hello(name){
//     console.log("hello",name);
// }
// const decoratedHello = decorator(hello);
// decoratedHello("Akhil");
//---------------------------------------------------------------

const input = document.getElementById("input-event");
function debounce(func,delay){
    let timerID;
    return function(...args){
        if(timerID){
            clearTimeout(timerID);
        }
        timerID = setTimeout(()=>{
            func.call(this,...args);
        },delay);
    };
}

function findSuggestion(e){
    console.log("suggestion for ",e.target.value);
}
const decoratedFindSuggestion = debounce(findSuggestion,300);
input.addEventListener("input",decoratedFindSuggestion);
