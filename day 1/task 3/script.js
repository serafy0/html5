let audio = document.getElementsByTagName("audio")[0]
let buttons = document.getElementsByTagName("button")

audio.src = "./audios/SuperMarioBros.mp3"
audio.volume = 0;
buttons[0].addEventListener("click", function () {
    audio.play()
})

buttons[1].addEventListener("click", function () {
    audio.pause()
})

buttons[2].addEventListener("click", function () {
    audio.load()
    audio.pause();
})

let volume = document.getElementById("volume")


volume.addEventListener("change",function(){
audio.volume = volume.value / 100
})
// let play = document.getElementById("play")

