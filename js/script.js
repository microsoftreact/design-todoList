let addButton = document.querySelector("#addToDo");
let inputField = document.querySelector("#inputField");
let toDoContainer = document.querySelector("#toDoContainer");

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  let paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = inputField.value;
  toDoContainer.prepend(paragraph);
  inputField.value = "";
  paragraph.addEventListener("click", () => {
    paragraph.style.textDecoration = "line-through";
  });
  paragraph.addEventListener("dblclick", () => {
    toDoContainer.removeChild(paragraph);
  });
});
