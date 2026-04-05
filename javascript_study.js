const saveBtn = document.querySelector(".btnSave");
const inputTodo = document.querySelector(".name");
if (saveBtn) {
  saveBtn.addEventListener("click", function () {
    const myTodo = {
      id: Date.now(),
      name: inputTodo.value,
    };
    const currentTodoStr = localStorage.getItem("todo");
    if (currentTodoStr) {
      const currentTodo = JSON.parse(currentTodoStr);
      currentTodo.push(myTodo);
      localStorage.setItem("todo", JSON.stringify(currentTodo));
    } else {
      localStorage.setItem("todo", JSON.stringify([myTodo]));
    }
    window.location.href = "index.html";
  });
}

const generateTable = () => {
  const todoListStr = localStorage.getItem("todo");
  if (todoListStr) {
    const todoList = JSON.parse(todoListStr);
    console.log(todoList);

    const tbody = document.querySelector("#todoList tbody");
    if (todoList && todoList.length) {
      todoList.forEach((todo, index) => {
        tbody.innerHTML += `
      <tr>
        <td>${todo.id}</td>
        <td>${todo.name}</td>
        <td>
          <button class="btnDelete" data-id="${todo.id}">Delete</button>
        </td>
      </tr>`;
      });
    }
  }
};

generateTable();

const deleteBtns = document.querySelectorAll(".btnDelete");
if (deleteBtns) {
  deleteBtns.forEach((btn, index) => {
    console.log(btn, index);
    btn.addEventListener("click", function () {
      const id = btn.getAttribute("data-id");
      alert(id);
      handleDeleteTodo(id);
    });
  });
}

const handleDeleteTodo = (id) => {
  const todoListStr = localStorage.getItem("todo");
  if (todoListStr) {
    const todoList = JSON.parse(todoListStr);
    console.log(todoList, id);
    const newTodo = todoList.filter((todo, index) => todo.id + "" !== id);
    localStorage.setItem("todo", JSON.stringify(newTodo));
    window.location.reload();
  }
};
