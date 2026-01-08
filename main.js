document.addEventListener('DOMContentLoaded', function(){
    let getRows1 = document.getElementsByClassName("row1");
    let getBlocks1 = document.getElementsByClassName("block1");
    let getRows2 = document.getElementsByClassName("row2");
    let getBlocks2 = document.getElementsByClassName("block2");

    let row1 = getData(getRows1);
    let blocks1 = getData(getBlocks1);
    let row2 = getData(getRows2);
    let blocks2 = getData(getBlocks2);



})



function getData(x){
    let output = [];
    for (let i = 0; i < x.length; x++){
        output.push(x[i]);
    }
    return output;
}


function moveDino(x, y){
    document.addEventListener("keypress", function(event){
        if (event.key === ' ' || event.key === "Spacebar"){
            
        }
    })
}

function createObstacle(row, dino){
    for (let i = 0; i < row.length; i++){
        
    }
}

function spawnDino(){
    
}