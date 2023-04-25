
let buttonDiv = document.createElement("div");

let inputButton = document.createElement("button");

buttonDiv.className = "button-div";

inputButton.className = "input-button";

inputButton.innerText = "Set square amount";

buttonDiv.appendChild(inputButton);

document.body.appendChild(buttonDiv);

var input = 16;
buildGrid(input);

inputButton.addEventListener("click",()=>{
    removeLastGrid();

    input = prompt("How many squares each side ?");
    
    buildGrid(input);
})


function buildGrid(size){
    const grid = document.createElement("div");
    grid.id ="grid-"+input;
    
    for (let i = 0; i < size; i++) {

        const container = document.createElement("container");
        container.className = "flex-container";
    
        for ( let j = 0 ; j < size; j++){ 
    
            const gridDiv = document.createElement("div");
            gridDiv.className = "grid-item";    
            container.appendChild(gridDiv); 
    
        }
    
    grid.appendChild(container);
        
    } 
    document.body.appendChild(grid);   
}



function removeLastGrid(){
    document.body.removeChild(document.getElementById("grid-"+input));
}



