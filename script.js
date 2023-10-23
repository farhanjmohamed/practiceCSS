document.addEventListener("DOMContentLoaded", function () {});

const deleteStart = document.getElementById("start-delete");

deleteStart.addEventListener("click", () => {
  deleteStart.style.backgroundColor = "red";
  const elements = document.querySelectorAll(".element");
  const deleteButton = document.getElementById("delete-button");
  elements.forEach((element) => {
    element.addEventListener("click", function () {
      this.classList.toggle("selected");
    });
  });

  deleteButton.addEventListener("click", function () {
    deleteStart.style.backgroundColor = "white";
    const selectedElements = document.querySelectorAll(".element.selected");
    selectedElements.forEach((element) => {
      element.remove();
    });
  });
});
