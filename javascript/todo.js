//JSON.stringify(object)
//object, array 등 어떠한 js code도 전부다 string으로 만들어준다
//JSON.parse("[1,2,3,4]")
//(4) [1,2,3,4]
//stirng -> array 로 변환해준다

const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    // localstorage에 array 저장 불가능
    // string만 저장 가능 -> 그래서 JSON.stringify()로 변환해주는 것
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    const btn = document.createElement("button");
    span.innerText = newToDo.text;
    btn.innerText = "❌";
    btn.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault(); 
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text:newToDo,
        id:Date.now(),
    };
    toDos.push(newToDoObj);
    //입력된 값을 toDos 어레이에 추가한다
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
