document.querySelector("#bigbox");
document.querySelector("#container");
let myArray = [[], [], []];
let marker = "";
let turn=1;
let value=1;
let flag=1;
const text = document.getElementById("text")
const container1 = document.querySelector("#container1");
const container2 = document.querySelector("#container2");
const container3 = document.querySelector("#container3");
const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");
const box3 = document.querySelector("#box3");
const box4 = document.querySelector("#box4");
const box5 = document.querySelector("#box5");
const box6 = document.querySelector("#box6");
const box7 = document.querySelector("#box7");
const box8 = document.querySelector("#box8");
const box9 = document.querySelector("#box9");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
btn1.addEventListener("click", function () {
    marker = btn1.textContent;
    text.innerHTML = 'Turn of Player1'
    turn=1;
})
btn2.addEventListener("click", function () { 
    marker = btn2.textContent;
    text.innerHTML = 'Turn of Player2'
    turn=1; 
})
box1.addEventListener("click", function () {
   
    if(turn==1){
    box1.innerHTML = `${marker}`;
    myArray[0][0] = marker; 
    }
    if(marker=="X"){
        document.body.style.backgroundColor="grey"
    }
    if(marker=="O"){
        document.body.style.backgroundColor="burlywood"
    }
     turn=0;
     setTimeout(()=>fun(),800)
})
box2.addEventListener("click", function () {
    
    if(turn==1){
    box2.innerHTML = `${marker}`;
    myArray[0][1] = marker;
    }
    if(marker=="X"){
        document.body.style.backgroundColor="grey"
    }
    if(marker=="O"){
        document.body.style.backgroundColor="burlywood"
    }
    turn=0;
    setTimeout(()=>fun(),800)
})
box3.addEventListener("click", function () {
    
    if(turn==1){
    box3.innerHTML = `${marker}`;
    myArray[0][2] = marker;
    }
    if(marker=="X"){
        document.body.style.backgroundColor="grey"
    }
    if(marker=="O"){
        document.body.style.backgroundColor="burlywood"
    }
     turn=0;
     setTimeout(()=>fun(),800)
})
box4.addEventListener("click", function () {
    
    if(turn==1){
    box4.innerHTML = `${marker}`;
    myArray[1][0] = marker;
    }
    if(marker=="X"){
        document.body.style.backgroundColor="grey"
    }
    if(marker=="O"){
        document.body.style.backgroundColor="burlywood"
    }
    turn=0;
    setTimeout(()=>fun(),800)
})
box5.addEventListener("click", function () {
    
    if(turn==1){
    box5.innerHTML = `${marker}`;
    myArray[1][1] = marker;
    }
    if(marker=="X"){
        document.body.style.backgroundColor="grey"
    }
    if(marker=="O"){
        document.body.style.backgroundColor="burlywood"
    }
     turn=0;
     setTimeout(()=>fun(),800)
})
box6.addEventListener("click", function () {
    
    if(turn==1){
    box6.innerHTML = `${marker}`;
    myArray[1][2] = marker
    }
    if(marker=="X"){
        document.body.style.backgroundColor="grey"
    }
    if(marker=="O"){
        document.body.style.backgroundColor="burlywood"
    }
    turn=0;
    setTimeout(()=>fun(),800)
})
box7.addEventListener("click", function () {
    
    if(turn==1){
    box7.innerHTML = `${marker}`;
    myArray[2][0] = marker
    }
    if(marker=="X"){
        document.body.style.backgroundColor="grey"
    }
    if(marker=="O"){
        document.body.style.backgroundColor="burlywood"
    }
    turn=0;
    setTimeout(()=>fun(),800)
})
box8.addEventListener("click", function () {
    
    if(turn==1){
    box8.innerHTML = `${marker}`;
    myArray[2][1] = marker;
    }
    if(marker=="X"){
        document.body.style.backgroundColor="grey"
    }
    if(marker=="O"){
        document.body.style.backgroundColor="burlywood"
    }
     turn=0;
     setTimeout(()=>fun(),800)
})
box9.addEventListener("click", function () {
    
    if(turn==1){
    box9.innerHTML = `${marker}`;
    myArray[2][2] = marker;
    }
   
    if(marker=="X"){
        document.body.style.backgroundColor="grey"
    }
    if(marker=="O"){
        document.body.style.backgroundColor="burlywood"
    }
     turn=0;
     setTimeout(()=>fun(),800)
})
const fun= function(){
    if (myArray[0][0] == "X" && myArray[0][1] == "X" && myArray[0][2] == "X") {
        value=0;
        alert("Congrates, Player1 is Won!");
        window.location.reload();
    }
    if (myArray[1][0] == "X" && myArray[1][1] == "X" && myArray[1][2] == "X") {
        value=0;
        alert("Congrates, Player1 is Won!");
        window.location.reload();
    }
    if (myArray[2][0] == "X" && myArray[2][1] == "X" && myArray[2][2] == "X") {
        value=0;
        alert("Congrates, Player1 is Won!");
        window.location.reload();
    }
    if (myArray[0][0] == "X" && myArray[1][0] == "X" && myArray[2][0] == "X") {
        value=0;
        alert("Congrates, Player1 is Won!");
        window.location.reload();
    }
    if (myArray[0][1] == "X" && myArray[1][1] == "X" && myArray[2][1] == "X") {
        value=0;
        alert("Congrates, Player1 is Won!");
        window.location.reload();
    }
    if (myArray[0][2] == "X" && myArray[1][2] == "X" && myArray[2][2] == "X") {
        value=0;
        alert("Congrates, Player1 is Won!");
        window.location.reload();
    }
    if (myArray[0][0] == "X" && myArray[1][1] == "X" && myArray[2][2] == "X") {
        value=0;
        alert("Congrates, Player1 is Won!");
        window.location.reload();
    }
    if (myArray[0][2] == "X" && myArray[1][1] == "X" && myArray[2][0] == "X") {
        value=0;
        alert("Congrates, Player1 is Won!");
        window.location.reload();
    }
    if (myArray[0][0] == "O" && myArray[0][1] == "O" && myArray[0][2] == "O") {
        value=0;
        alert("Congrates, Player2 is Won!");
        window.location.reload();
    }
    if (myArray[1][0] == "O" && myArray[1][1] == "O" && myArray[1][2] == "O") {
        value=0;
        alert("Congrates, Player2 is Won!");
        window.location.reload();
    }
    if (myArray[2][0] == "O" && myArray[2][1] == "O" && myArray[2][2] == "O") {
        value=0;
        alert("Congrates, Player2 is Won!");
        window.location.reload();
    }
    if (myArray[0][0] == "O" && myArray[1][0] == "O" && myArray[2][0] == "O") {
        value=0;
        alert("Congrates, Player2 is Won!");
        window.location.reload();
    }
    if (myArray[0][1] == "O" && myArray[1][1] == "O" && myArray[2][1] == "O") {
        value=0;
        alert("Congrates, Player2 is Won!");
        window.location.reload();
    }
    if (myArray[0][2] == "O" && myArray[1][2] == "O" && myArray[2][2] == "O") {
        value=0;
        alert("Congrates, Player2 is Won!");
        window.location.reload();
    }
    if (myArray[0][0] == "O" && myArray[1][1] == "O" && myArray[2][2] == "O") {
        value=0;
        alert("Congrates, Player2 is Won!");
        window.location.reload();
    }  
    if (myArray[0][2] == "O" && myArray[1][1] == "O" && myArray[2][0] == "O") {
        value=0;
        alert("Congrates, Player2 is Won!");
        window.location.reload();
    } 
    if(value==1){
           if((myArray[0][0]=="X" || myArray[0][0]=="O") && (myArray[0][1]=="X" || myArray[0][1]=="O") && (myArray[0][2]=="X" || myArray[0][2]=="O") && (myArray[1][0]=="X" ||myArray[1][0]=="O") && (myArray[1][1]=="X" || myArray[1][1]=="O") && (myArray[1][2]=="X" || myArray[1][2]=="O")  && (myArray[2][0]=="X" || myArray[2][0]=="O") && (myArray[2][1]=="X" || myArray[2][1]=="O") && (myArray[2][2]=="X" || myArray[2][2]=="O")) {
                                   alert("Game Draw!");
                                  window.location.reload();
           }
    }
   
}
const btn3=document.querySelector("#btn3");
btn3.addEventListener("click", function(){
    window.location.reload();
})
const audio= new Audio();
audio.src="./text_notification.mp3";












