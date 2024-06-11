let button = document.getElementsByTagName("form")[0];


button.addEventListener("submit",function(e){
    e.preventDefault()

    let inputs = document.getElementsByTagName("input") 
    localStorage.setItem("username",inputs[0].value)
    localStorage.setItem("email",inputs[1].value)
})

