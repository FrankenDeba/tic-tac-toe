var turn = "O";
var data = [];
let count = 0;
var arr = new Array(3);

//this 2d array will store the moves -->
for(let i = 0; i<3; i++){
    arr[i] = new Array(3);
}
//adding event listener on every click -->
document.getElementById("box").addEventListener("click",clk = (e)=>
{
    turn==="O"?turn="X":turn="O";
        if(e.target.id !="box"){
            if(turn === "X"){
            document.getElementById(e.target.id).innerHTML = "X";
            data.push({value:e.target.id,turn:"X",crossed:1});
            count++;
            }
            else if(turn === "O"){
                document.getElementById(e.target.id).innerHTML = "O";
                data.push({value:e.target.id,turn:"O",crossed:1});
                count++;
                
            } 
    }
    //pushing datas into a 2d array that stores the status of the board-->
     pushArray(data);   
} 
);

let pushArray = (data) =>{
  
        let rowIndex = data[data.length - 1].value.charAt(1);
        let colIndex = data[data.length - 1].value.charAt(3);
        arr[rowIndex][colIndex]= data[data.length - 1].turn;
        //calling the winner declaration function -->
    declareWinner(arr);
     
}
console.log(data);

//checking if row is crossed -->
let rowCrossed = (arr) =>{
    
    let flag = false; 
    for(let i = 0; i<3; i++){
        if(arr[i][0]===arr[i][1] && arr[i][1] === arr[i][2] && arr[i][0] != null){
            console.log("row crossed");
            flag = true;
            
        }
    }
    
    return flag;
}

//checking if column is crossed -->
let columnCrossed = (arr) =>
{ 
    let flag = false;
    for(let i = 0; i<3; i++){
        if(arr[0][i]===arr[1][i] && arr[1][i] === arr[2][i] && arr[0][i] != null){
            flag = true;
            console.log("column crossed");
            
        }
    }
    
    return flag;
} 

//checking if diagonal is crossed -->
let diagonalCrossed = (arr) =>
{ 
    let flag = false;
    for(let i = 0; i<3; i++){
        if(arr[0][0]===arr[1][1] && arr[1][1] === arr[2][2] && arr[0][0] != null){
            flag = true;
            
        }
        if(arr[0][2] === arr[1][1] && arr[1][1]===arr[2][0] && arr[0][2] != null){
            flag = true;
        }
    }
    
    return flag;
}

let declareWinner = (arr) =>{
 //if any row,column of diagonal is cssed -->
    if(rowCrossed(arr) || columnCrossed(arr) || diagonalCrossed(arr)){
        if(data[data.length-1].turn === "X"){
            document.getElementById("result").innerHTML += "X has won";
            
        }
        else if(data[data.length -1].turn === "O"){
            document.getElementById("result").innerHTML += "O has won";
            
        }
        //removing event listener once game is over -->
        document.getElementById("box").removeEventListener("click",clk);
        
    }
    else if(count === 9){
        document.getElementById("result").innerHTML = "draw";
    }
    

        
}
     
    