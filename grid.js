const container = document.createElement("div");
container.className = "container";

const grid = document.createElement("div");
grid.className = "row locked";
let row = document.createElement("div");
row.setAttribute("index", "");
row.className = " cell ";

function createGrid() {
  for (i = 0; i < 8; i++) {
    let clonedColumn = row.cloneNode(true);
    grid.appendChild(clonedColumn);
    //[...clonedColumn].
  }

  for (j = 0; j < 6; j++) {
    let clonedRow = grid.cloneNode(true);
    container.appendChild(clonedRow);
  }
}

createGrid();
document.body.appendChild(container);
