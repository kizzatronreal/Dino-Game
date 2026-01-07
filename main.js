document.addEventListener('DOMContentLoaded', function(){
    let getRows = document.querySelectorAll('tr');
    let getBlocks = document.querySelectorAll('td');
    let rows = getData(getRows);
    let blocks = getData(getBlocks);

    
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