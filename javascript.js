var gridcontainer = document.querySelector(".gridcontainer");

// display values on slider
var slider = document.getElementById("range");
var output = document.querySelector(".value");
output.innerHTML = slider.value + " x " + slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

// function to clear grid
let clearGrid = () => {
    gridcontainer.querySelectorAll('*').forEach(n => n.remove());
}

// function to create grid
gridSizer(); // runs function once at the start
slider.addEventListener("input", gridSizer);
function gridSizer(e) {
    output.innerHTML = slider.value + " x " + slider.value;
    clearGrid();
    let i,j;
    var rows = slider.value;
    width = 100/rows;
    for (i=1; i<=rows; i++){
        for (j=1; j<=rows; j++){
            const gridboxes = document.createElement("div");
            gridboxes.classList.add("gridbox");
            gridboxes.style.width = width + "%";
            gridboxes.style.paddingBottom = width + "%";
            gridcontainer.appendChild(gridboxes);
            }
        }
    const gridboxes = document.querySelectorAll(".gridbox"); //select all new initiated gridboxes
    for (const gridbox of gridboxes) {
        let opacityval = 0;
        gridbox.addEventListener("mouseover", function(e){
            this.classList.add("orange");
            opacityval += 0.2;
            this.style.opacity = opacityval;
        })
        gridbox.addEventListener("click", function(e){
            this.classList.add("orange");
            opacityval += 0.2;
            this.style.opacity = opacityval;
        })
    } 
}