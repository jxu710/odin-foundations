const gridContainer = document.querySelector(".container");

function addGridItem(size) {
  // add grid items to grid container
  for (let i = 0; i < size; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridContainer.appendChild(gridItem);

    gridContainer.style.gridTemplateColumns = `repeat(${Math.sqrt(
      size
    )}, 20px)`;
    gridContainer.style.gridTemplateRows = `repeat(${Math.sqrt(size)}, 20px)`;

    gridItem.addEventListener("mouseover", function (e) {
      e.target.style.backgroundColor = "black";
    });
  }
}

addGridItem(256);
// reset button

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function () {
  const gridItems = document.querySelectorAll(".grid-item");
  Array.from(gridItems).forEach((item) => {
    item.style.backgroundColor = "#fff";
  });
});
