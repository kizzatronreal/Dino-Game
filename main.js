
document.addEventListener('DOMContentLoaded', function(){
    let getRows1 = document.getElementsByClassName("row1");
    let getBlocks1 = document.getElementsByClassName("block1");
    let getRows2 = document.getElementsByClassName("row2");
    let getBlocks2 = document.getElementsByClassName("block2");
    let dinoSpawned = false;


    spawnDino(getBlocks2, dinoSpawned);
    moveDino(getBlocks2, getBlocks1);

})

function moveDino(ground, up){
    let dino = "Test";
    document.addEventListener("keypress", function(event){
        if (event.key === ' ' || event.key === "Spacebar"){
            let dinoPos = getDinoLocation(ground);
            up[dinoPos + 1].innerHTML = dino;
            ground[dinoPos].innerHTML = "";
            setTimeout(() => {
                let upDinoPos = getDinoLocation(up);
                ground[upDinoPos + 1].innerHTML = dino;
                up[upDinoPos].innerHTML = "";
            }, 300);

        }
    })
}

function createObstacle(row, dino){
    for (let i = 0; i < row.length; i++){
        
    }
}

function spawnDino(block, bool){
    let dino = "Test";
    if (!bool){
        block[0].innerHTML = dino;
    }
    bool = true;
}

function getDinoLocation(block){
    let dino = "Test";
    for (let i = 0; i < block.length; i++){
        if (block[i].innerHTML == dino){
            return i;
        }
    }
}