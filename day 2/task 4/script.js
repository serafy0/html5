let dragged = null;
let score = document.getElementById("score")
console.log(score)



let images = document.getElementsByTagName("img")
console.log(images)

let itemDragged;

images[0].addEventListener("dragstart",function(e){
itemDragged = e.target.id
})

images[1].addEventListener("dragstart",function(e){
    itemDragged = e.target.id
    })

images[2].addEventListener("dragstart",function(e){
        itemDragged = e.target.id
})

//paper
images[0].addEventListener("drop", (event) => {
  if (itemDragged === "paper") {
    console.log("draw, paper+ paper")
    score.innerText = "draw, paper+ paper"
  }else if (itemDragged === "s"){
    console.log("you win, s beats paper")
    score.innerText = "you win, s beats paper"

  }else if (itemDragged === "rock"){
    console.log("you lose, rock loses to paper")
    score.innerText = "you lose, rock loses to paper"
  }
});


            

//rock
images[1].addEventListener("drop", (event) => {
    event.preventDefault()
    // console.log(event.dataTransfer)
  // prevent default action (open as a link for some elements)
//   event.preventDefault();
  // move dragged element to the selected drop target
  if (itemDragged === "paper") {
    console.log("you win , paper beats rock")
    score.innerText = "you win , paper beats rock"

  }else if (itemDragged=== "s"){
    console.log("you lose, s loses to rock")
    score.innerText ="you lose, s loses to rock" 
  }else if (itemDragged === "rock"){
    console.log("draw. rock+rock")
    score.innerText ="draw. rock+rock"
  }
});

//s
images[2].addEventListener("drop", (event) => {
    // console.log("hello")
  // prevent default action (open as a link for some elements)
//   event.preventDefault();
  // move dragged element to the selected drop target
  if (itemDragged === "paper") {
    console.log("you lose, paper loses to s")
    score.innerText ="you lose, paper loses to s"
  }else if (itemDragged=== "s"){
    console.log("draw, s+s")
    score.innerText ="draw, s+s"
  }else if (itemDragged === "rock"){
    console.log("you win, rock beats s")
    score.innerText = "you win, rock beats s"
  }
});

images[1].addEventListener("dragover", (event) => {
    // prevent default to allow drop
    event.preventDefault();
  });


images[0].addEventListener("dragover", (event) => {
    // prevent default to allow drop
    event.preventDefault();
  });
  images[2].addEventListener("dragover", (event) => {
      // prevent default to allow drop
      event.preventDefault();
    });