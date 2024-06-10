let audio = document.getElementsByTagName("audio")[0]
let buttons = document.getElementsByTagName("button")
let image = document.getElementsByTagName("img")[0]

audio.src = "./audios/0.mp3"
image.src = `./images/0.png`
console.log(audio.duration)

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

let timeRange = document.getElementById("time")

timeRange.addEventListener("change",function(){
    console.log(timeRange.value)

    audio.currentTime = timeRange.value
})

// audio.addEventListener("ch")
// setInterval(function(){
//     timeRange.value += 1/100
// },1000)

audio.addEventListener("timeupdate",function(){
    timeRange.value = audio.currentTime;
})

let songs = document.getElementsByClassName("song")
for(let i =0;i<songs.length;i++){
    songs[i].addEventListener("click",function(){
        audio.src = `./audios/${i}.mp3`
        image.src = `./images/${i}.png`
        audio.play()
        timeRange.value = 0
        // setTimeout(function(){
        // },2000)
    })
}

audio.addEventListener("durationchange",function(){
                console.log(audio.duration)
            timeRange.max = audio.duration

})