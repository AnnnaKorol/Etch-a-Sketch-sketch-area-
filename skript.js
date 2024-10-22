const penColorPicker = document.querySelector("#pen-color");

const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider-value");

const randomColorSwitching = document.querySelector("#rainbow");
randomColorSwitching.addEventListener("click", toggleUseOfRandomColors);

let randomizingColors = false;
let drawing = false;

//Create the divs using JavaScript.
//put grid squares inside “container” div





function createSketchContainer(size) {
  let sketchArea = document.querySelector("#sketch-area");
  let squares = sketchArea.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  sketchArea.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  sketchArea.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.classList.add("cell");
    sketchArea.style.backgroundColor = "white";

    square.addEventListener("mousedown", colorSquare);
    sketchArea.insertAdjacentElement("before", square); //insertAdjacentElement is more flexible then appendchild or insertBefore
  }
}


//webpage with a 16x16 grid of square divs
createSketchContainer(16);

//add input asking for new grid, set limit between 2px - 100px
penColorPicker.addEventListener("input", (e) => {
  penColor = colorPickerColor = e.target.value;
  input >= 2 && input <= 100
    ? createSketchContainer(input)
    : console.log("input error!");
});

// function changeSize(input) {
//     input >= 2 && input <= 100 ? createSketchContainer(input) : console.log("input error!");
// };

function resetContainer() {
  let sketchArea = document.querySelector("#sketch-area");
  let squares = sketchArea.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//If the slider change, then clean the previous settings and provide new ones.                           // Rule: <input type="text" id="myInput" oninput="myFunction()">
//Когда пользователь перемещает ползунок (ввод изменяется). Событие oninput срабатывает каждый раз, когда значение ползунка изменяется.
slider.oninput = function () {
    //function myFunction() {
    squaresPerSide = this.value; //при изменении положения ползунка переменная squaresPerSide обновляется с новым значением.  //let text = document.getElementById("myInput").value;
    sliderValue.textContent = `${this.value} x ${this.value} (Resolution)`; //document.getElementById("demo").textContent = "You wrote: " + text;
    removeGridSquares(); //удалять предыдущие "квадраты" (элементы сетки)                                 // Delete old squares
    createGridSquares(); //создаёт новую сетку "квадратов" в зависимости от значения ползунка.            // Add new squares
  };
  
  //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
  
  //Эта строка изменяет текстовое содержимое элемента sliderValue. Оно отображает текущее значение ползунка в формате <значение> x <значение> (Resolution).
  sliderValue.textContent = `${slider.value} x ${slider.value} (Resolution)`;