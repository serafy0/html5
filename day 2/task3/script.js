var c = document.getElementsByTagName("canvas")[0];

function drawCircle(color){

    var ctx = c.getContext("2d");
    ctx.strokeStyle = color
    ctx.beginPath();
    
    ctx.arc(Math.random()*1000, Math.random()*700, (Math.random()*(70-30)+30), 0, Math.PI * 2, false);
    

    ctx.stroke();
    

}

let input = document.getElementsByTagName("input")[0]
let color 
input.addEventListener("change",function(){
color = input.value
})


for(let i =1;i<=20;i++){
    drawCircle()
}


let button = document.getElementsByTagName("button")[0]

button.addEventListener("click",function(){
    var ctx = c.getContext("2d");

    ctx.clearRect(0,0,1000,700);
    for(let i =1;i<=(Math.random()*(50-20)+20);i++){
    drawCircle(color);
    }
})