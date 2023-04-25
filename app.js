
for (let i = 0; i < 16; i++) {

    const container = document.createElement("container");
    container.className = "flex-container";

    for ( let j = 0 ; j < 16; j++){ 

        const gridDiv = document.createElement("div");
        gridDiv.className = "grid-item";    
        container.appendChild(gridDiv); 

    }
    
document.body.appendChild(container);
    
}




