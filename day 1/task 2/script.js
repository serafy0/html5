let inputs = document.getElementsByTagName("input")
let text = document.getElementById("text")
for(let i = 0;i<=2;i++){
    inputs[i].addEventListener("input",function(){
        changeColor()

    })

}
function changeColor(){
   let red = inputs[0].value;
    let green = inputs[1].value;
    let blue = inputs[2].value;
    text.style.color = `rgb(${red},${green},${blue})`
    console.log(text.style.color)
}

changeColor()