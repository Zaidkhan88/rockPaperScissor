function getComputerChoice(){
    var options = ["r","p","s"];
    let option = options[Math.floor(Math.random()*options.length)];
    return option
}
function playRound(ComputerSelection,playerSelection){
    if(ComputerSelection==playerSelection){
        return "Draw";
 }
    else if((ComputerSelection=="r" && playerSelection=="p")+(ComputerSelection=="p" && playerSelection=="s") + (ComputerSelection=="s" && playerSelection=="r")){
         return "You Won!!"
}   
    else if((ComputerSelection=="r" && playerSelection=="s")+(ComputerSelection=="p" && playerSelection=="r") + (ComputerSelection=="s" && playerSelection=="p")) {
        return "You loss"
}
else{
        return "Invalid input"
    }
    console.log(ComputerSelection,playerSelection);
}
let ComputerSelection = getComputerChoice();
const playerSelection = prompt("Enter your choice(r/p/s)");
console.log(playRound(ComputerSelection,playerSelection))