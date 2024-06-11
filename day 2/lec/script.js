
let buttons = document.getElementsByTagName("button")[0]


function saveDate(){
    localStorage.setItem("username","rania")
    localStorage.setItem("email","rania@s.com")
}

function clear(){
    localStorage.clear()
}

function SsaveDate(){
    sessionStorage.setItem("username","rania")
    sessionStorage.setItem("email","rania@s.com")
}

function Sclear(){
    sessionStorage.clear()
}