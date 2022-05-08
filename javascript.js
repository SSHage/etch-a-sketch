var gridcontainer = document.querySelector(".gridcontainer");

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

// function to create grid

slider.addEventListener("input", gridSizer);

function gridSizer(e) {
    clearGrid();
    let i,j;
    var rows = slider.value;
    width = 100/rows;
    for (i=1; i<=rows; i++){
        for (j=1; j<=rows; j++){
            const gridboxes = document.createElement("div");
            gridboxes.classList.add("gridbox");
            gridboxes.style.width = width + "%";
            gridboxes.style.paddingBottom= width + "%";
            gridcontainer.appendChild(gridboxes);
            }
        }
}
// function to colour gridboxes red after cursor moves over
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
