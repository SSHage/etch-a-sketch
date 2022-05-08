var gridcontainer = document.querySelector(".gridcontainer");

// function to create button for users to input values
/* const inputContainer = document.querySelector(".inputcontainer");
const inputButton = document.createElement("button");
inputButton.classList.add("inputbutton");
inputButton.textContent = "Click here to input number of rows and columns.";
inputContainer.appendChild(inputButton); */

// display values on slider
var slider = document.getElementById("range");
var output = document.querySelector(".value");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

// function to clear grid
let clearGrid = () => {
    gridcontainer.querySelectorAll('*').forEach(n => n.remove());
}

// function to find userinput
/*let rows;
let rowWidth = 100/rows;

let userInput = () => {
    rows = window.prompt("Please insert number of rows/columns (up to 100).");
    if (rows > 100){
        userInput();
    }
    else if(rows == ""){
        userInput();
    }
    else {
        rowWidth = 100/rows;
        console.log(rowWidth);
    }
} */

// function to create grid
let i,j;
let createGrid = () => {
    for (i=1; i<=rows; i++){
        for (j=1; j<=rows; j++){
            const gridboxes = document.createElement("div");
            gridboxes.classList.add("gridbox");
            gridboxes.style.width = rowWidth + "%";
            gridboxes.style.paddingBottom= rowWidth + "%";
            gridcontainer.appendChild(gridboxes);
            }
        }
    }

// event listener for inputButton
inputButton.addEventListener("click", function(){
    clearGrid();
    userInput();
    createGrid();
    colourGrid();
});

// function to colour gridboxes red after cursor moves over
let colourGrid = () => {
    const gridboxes = document.querySelectorAll(".gridbox");
    /* gridboxes.forEach(gridbox => 
        gridbox.addEventListener("mouseover", () =>
            gridbox.classList.add("red")
                )
            ); */
        
    // alternative function
    for (const gridbox of gridboxes) {
        let opacityval = 0;
        gridbox.addEventListener("mouseover", function(e){
            this.classList.add("red");
            opacityval += 0.2;
            this.style.opacity = opacityval;
        })
    } 
}
