
let currentPlayer = "X";
let arr = Array(9).fill(null)
function handle(e) {
    const id =Number( e.id);
    if (e.innerHTML) {
        return;
    }
    e.innerHTML = currentPlayer;
    arr[id] = currentPlayer;
         checkWiner(currentPlayer);
    currentPlayer = currentPlayer === "X" ? "O" : "X"
}
function checkWiner(currentPlayer){
    if(
        (arr[0]!==null && arr[0]===arr[1] && arr[1]===arr[2])||
        (arr[3] !==null && arr[3]===arr[4] && arr[4]===arr[5])||
        (arr[6]!==null && arr[6]===arr[7] && arr[7]===arr[8])||
        (arr[0]!==null && arr[0]===arr[4] && arr[4]===arr[8])||
        (arr[2]!==null && arr[2]===arr[4] && arr[4]===arr[6])||
        (arr[0]!==null && arr[0]===arr[3] && arr[3]===arr[6])||
        (arr[1]!==null && arr[1]===arr[4] && arr[4]===arr[7])||
        (arr[2]!==null && arr[2]===arr[5] && arr[5]===arr[8])
    ){
           let winnercontainer=document.getElementById("winner-container");
           let heading=document.getElementById("heading");
           setTimeout(function() {
            winnercontainer.classList.add("active") 
            heading.innerHTML=`Winner is ${currentPlayer}`
           }, 300);       
        return;
    }
   let result=arr.every((item)=>item!==null)
   if(result){

       let heading=document.getElementById("heading");
       heading.innerHTML=`Draw!!`
       
    }
}
function reset(){
    let col=document.querySelectorAll(".col");
            arr=Array(9).fill(null)
            let winnercontainer=document.getElementById("winner-container");
            winnercontainer.classList.remove("active")
      col.item(0).innerHTML=""
      col.item(1).innerHTML=""
      col.item(2).innerHTML=""
      col.item(3).innerHTML=""
      col.item(4).innerHTML=""
      col.item(5).innerHTML=""
      col.item(6).innerHTML=""
      col.item(7).innerHTML=""
      col.item(8).innerHTML=""
}