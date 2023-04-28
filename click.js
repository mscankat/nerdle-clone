document.querySelector(".container").firstChild.classList.remove("locked");

let currentRow;
let currentCell = -1;
function selectRow() {
  document.querySelectorAll(".row").forEach((current) => {
    if (!current.className.includes("locked")) {
      currentRow = current;
    }
  });

  currentRow.childNodes.forEach((current, index) =>
    current.addEventListener("click", (x) => {
      currentCell = index;
      if (!current.parentElement.className.includes("locked")) {
        let redItems = document.querySelector(".active");
        if (redItems) {
          redItems.classList.remove("active");
          current.classList.add("active");
        } else {
          current.classList.add("active");
        }
      }
    })
  );
}

selectRow();
