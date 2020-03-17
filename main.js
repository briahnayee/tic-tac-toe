/*----- constants -----*/


/*----- app's state (variables) -----*/
let grid = [0,0,0,0,0,0,0,0,0]

let turn = "1"

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [1,4,8],
    [2,4,6]
]

const colors = {
    "0": "white",
    "1": "purple",
    "2": "grey"
}


/*----- cached element references -----*/
// add ids to elements
// store elements in variables after getting by id

/*----- event listeners -----*/
//used cached elements to call user click method
document.querySelector('button').addEventListener('click', initialize)

arr = document.getElementsByClassName('grid-item')
for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", userClick)
}

/*----- functions -----*/
function initialize() {

}



function userClick(event) { 
    console.log(event.target.id)
    let id = event.target.id 
    if (turn == "1") {
        event.target.style.backgroundColor = "purple"
        grid[id] = "1"
    } else {
        event.target.style.backgroundColor = "grey"
        grid[id] = "2"
    }
    altTurn()
}

function altTurn() {
    if (turn == "1") {
        turn = "2";
    } else {
        turn = "1"
    }

}

function win() {

}