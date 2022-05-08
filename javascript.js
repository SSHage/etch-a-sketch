var gridcontainer = document.querySelector(".gridcontainer");

// function to create button for users to input values
const inputContainer = document.querySelector(".inputcontainer");
const inputButton = document.createElement("button");
inputButton.classList.add("inputbutton");
inputButton.textContent = "Click here to input number of rows and columns.";
inputContainer.appendChild(inputButton);

// function to clear grid
let clearGrid = () => {
    gridcontainer.querySelectorAll('*').forEach(n => n.remove());
}

// function to find userinput
let rows;
let columns;
let rowWidth = 100/rows;
let columnWidth = 100/columns;

let userInput = () => {
    rows = window.prompt("Please insert number of rows (up to 100).");
    columns = window.prompt("Please insert number of columns (up to 100).");
    if (rows > 100 || columns > 100){
        userInput();
    }
    else if(rows == "" || columns == ""){
        userInput();
    }
    else {
        rowWidth = 100/rows;
        columnWidth = 100/columns;
    }
}

// function to create grid
let i,j;
let createGrid = () => {
    for (i=1; i<=rows; i++){
        for (j=1; j<=columns; j++){
            const gridboxes = document.createElement("div");
            gridboxes.classList.add("gridbox");
            gridboxes.style.width = columnWidth + "%";
            gridboxes.style.paddingBottom= columnWidth + "%";
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
    gridboxes.forEach(gridbox => 
        gridbox.addEventListener("mouseover", () =>
            gridbox.classList.add("red")
                )
            );
    // alternative function
    /* for (const gridbox of gridboxes) {
        gridbox.addEventListener("mouseover", function(e){
            this.classList.add("red");
        })
    } */
}











