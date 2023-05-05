let backgroundColor = "whitesmoke"

let a = function() {
    return "#" + Math.floor(Math.random()*16777215).toString(16)};


const container = document.getElementById("grid");
function makeRows(rows, cols) {
    //clear field
    container.replaceChildren()
    //set property
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
//loop to make divs
    for (c = 0; c < (rows * cols); c++) {
      let content = document.createElement("div");
      content.className = "grid-item"
      content.addEventListener("mouseenter", (event) => {
        event.target.style.background = backgroundColor;
      });
      container.appendChild(content);
    };
  };

//size buttons
const size1 = document.querySelector('#size1');
size1.addEventListener('click', () => {
    makeRows(10, 10)
  });
const size2 = document.querySelector('#size2');
size2.addEventListener('click', () => {
    makeRows(30, 30)
  });
const size3 = document.querySelector('#size3');
size3.addEventListener('click', () => {
      makeRows(50, 50)
    });
const size4 = document.querySelector('#size4');
size4.addEventListener('click', () => {
    makeRows(100, 100)
  });
//color buttons
const white = document.querySelector('#white');
white.addEventListener('click', () => {
    backgroundColor = "whitesmoke";
});
const black = document.querySelector('#black');
black.addEventListener('click', () => {
    backgroundColor = "black";
    });
const random = document.querySelector('#random');
random.addEventListener('click', () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    backgroundColor = "#" + randomColor;
    });
const rainbow = document.querySelector('#rainbow')
rainbow.addEventListener('click', () => {
    backgroundColor = a()
});
makeRows(10, 10);
