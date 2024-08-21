console.log("Harry")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "red"

// document.getElementById("redbox").style.backgroundColor = "Green"

// document.querySelector(".box").style.backgroundColor = "skyblue"

console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e =>{
    // console.log(e)
    e.style.backgroundColor = "green"
})