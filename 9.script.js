console.log("Hello World")


document.body
document.body.childNodes
document.body.childNodes[0]
document.body.childNodes[1]
document.body.childNodes[1].childNodes


let cont = document.body.childNodes[1]
console.log(cont)
console.log(cont.firstChild)
console.log(cont.lastChild)
console.log(cont.firstElementChild)
console.log(cont.lastElementChild)
cont.lastElementChild.style.color = "red"
cont.lastElementChild.style.backgroundColor = "green"
console.log(cont.lastElementChild.parentElement)

document.body.firstElementChild
document.body.firstElementChild.childNodes
console.log(document.body.firstElementChild.children)

document.body.firstElementChild.children[3]
document.body.firstElementChild.children[3].nextElementSibling
document.body.firstElementChild.children[3].previousElementSibling
console.log(document.body.firstElementChild.children[3].previousSibling) 