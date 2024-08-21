let button = document.getElementById("btn")

button.addEventListener("dblclick", ()=>{
    // alert("I was clicked. Yayy!!")
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!"
})
button.addEventListener("contextmenu", ()=>{
    alert("Dont hack us by right click")
})
document.addEventListener("keydown", (e)=>{
    console.log(e.key, e.keyCode)
})