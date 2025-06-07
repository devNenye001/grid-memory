//Interactive Grid Memory Program

let clicked = []; //To keep track of the grid clicked
let gridBox = document.querySelectorAll(".square");
let isLocked = false; //makes you to not click on the box when its reseting

gridBox.forEach(grid =>{
        grid.addEventListener("click", event =>{
        if (isLocked) return; 
        
        //if it has not been clicked before add to the clicked array
        if(!clicked.includes(grid)){
            event.target.classList.add("green");
            clicked.push(grid);
        }

        //if the clicked array length reaches 6, remove each grid green class
        if(clicked.length == 6){
        isLocked = true;

        clicked.reverse();//then reverse the array
        
        //remove the class "green" from each iteam in the grid
        for (let i = clicked.length - 1; i >= 0; i--){
            setTimeout(() =>{
                clicked[i].classList.remove("green");
        }, 1000 * i);
        }

        //clear the array and set the unclickable boolean to false
        setTimeout(() => {
            clicked = [];
            isLocked = false;
            }, 1000 * clicked.length);
    }
})
});