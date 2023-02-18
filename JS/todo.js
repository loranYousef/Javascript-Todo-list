const todoInput = document.querySelector(".todo-input")
const todoBtn = document.querySelector(".todo-button")
const todoResult = document.querySelector(".todo-result")

function addTodo(e){
e.preventDefault();

// add todo- item div
const todoDiv =document.createElement("div");
todoDiv.classList.add('todo-item')
// add h3
const newTodo = document.createElement('h3');
newTodo.innerText = todoInput.value ;
todoDiv.appendChild(newTodo);
newTodo.classList.add('todo-title')

// create buttons div 
const buttonDiv = document.createElement('div')
todoDiv.appendChild(buttonDiv)

// add complete , delete buttons 
const   

}


todoBtn.addEventListener('click',addTodo)

 
