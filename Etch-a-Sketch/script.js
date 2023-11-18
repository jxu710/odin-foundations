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

function buttonModes() {
  const resetButton = document.querySelector("#reset");
  resetButton.addEventListener("click", function () {
    const gridItems = document.querySelectorAll(".grid-item");
    Array.from(gridItems).forEach((item) => {
      item.style.backgroundColor = "#fff";
      //   remove rainbow effect when click erase button
      item.removeEventListener("mouseover", rainbowHover);
    });
  });

  const rainbowButton = document.querySelector("#rainbow");
  rainbowButton.addEventListener("click", rainbowMode);

  function rainbowMode() {
    const gridItems = document.querySelectorAll(".grid-item");
    Array.from(gridItems).forEach((item) => {
      item.addEventListener("mouseover", rainbowHover);
    });
  }

  function rainbowHover(e) {
    e.target.style.backgroundColor = `rgb(${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )})`;
  }
}

buttonModes();
