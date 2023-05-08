let backgroundColor = "whitesmoke"

function changeColor(event) {
if (backgroundColor === "Rainbow") {
    color = Math.floor(Math.random()*16777215).toString(16);
    event.target.style.backgroundColor = "#" + color; 
}
else {
    event.target.style.backgroundColor = backgroundColor;
};
}

//grid function
const container = document.getElementById("grid");
function makeRows(rows, cols) {
    container.replaceChildren()
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let content = document.createElement("div");
      content.className = "grid-item"
      content.nodeName = "griditem"
      content.addEventListener("mouseenter", (event) => {
        if(event.ctrlKey === false) {
        changeColor(event)
        }
        else {}
    });
      container.appendChild(content);
    };
  };

//size buttons
const size1 = document.querySelector('#size1');
size1.addEventListener('click', () => {
    makeRows(10, 10)
    applysActive();
    size1.classList.add('active1');
  });
const size2 = document.querySelector('#size2');
size2.addEventListener('click', () => {
    makeRows(30, 30)
    applysActive();
    size2.classList.add('active1');
  });
const size3 = document.querySelector('#size3');
size3.addEventListener('click', () => {
      makeRows(50, 50)
      applysActive();
    size3.classList.add('active1');
    });
const size4 = document.querySelector('#size4');
size4.addEventListener('click', () => {
    makeRows(100, 100)
    applysActive();
    size4.classList.add('active1');
  });
//color buttons
const white = document.querySelector('#white');
white.addEventListener('click', () => {
    backgroundColor = "whitesmoke";
    applycActive()
    white.classList.add('active');
});
const black = document.querySelector('#black');
black.addEventListener('click', () => {
    backgroundColor = "black";
    applycActive()
    black.classList.add('active');
    });
const random = document.querySelector('#random');
random.addEventListener('click', () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    backgroundColor = "#" + randomColor;
    applycActive()
    random.classList.add('active');
    });
const rainbow = document.querySelector('#rainbow')
rainbow.addEventListener('click', () => {
    backgroundColor = "Rainbow"
    applycActive();
    rainbow.classList.add('active');
});
 //clear grid
function clearGrid() {
  const gridItems = document.querySelectorAll(".grid-item");
  for(let gridItem of gridItems) {
      gridItem.style.backgroundColor = "black"
  }};
const clear = document.querySelector("#clear")
clear.addEventListener('click', () => {
    clearGrid();
});

makeRows(30, 30);
//color picker
function selectColor() {
    let color = document.getElementById('colorInput');
    backgroundColor = color.value;
    applycActive()
    color.classList.add('active');
 }
 colorInput.addEventListener("change", selectColor);
 colorInput1.addEventListener("input", selectColor1);

 function selectColor1() {
  let color = document.getElementById('colorInput1');
  const gridItems = document.querySelectorAll(".grid-item");
  for(let gridItem of gridItems) {
      gridItem.style.backgroundColor = color.value;
  }};
  //adding select effect to buttons
const active = document.querySelectorAll('button')
function applycActive() {
active.forEach((button) => { 
  button.classList.remove('active')
});
};
function applysActive() {
  active.forEach((button) => { 
    button.classList.remove('active1')
  });
  };
    
