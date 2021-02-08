// let left = document.getElementById("left")
// let center = document.getElementById("center")
// let right = document.getElementById("right")
// let test = document.getElementById("test")

// function myRight() {
//     test.classList.add("right")
//     test.classList.remove("center")

// }
// function myCenter() {
//     test.classList.add("center")
//     test.classList.remove("right")

let changeColor = document.getElementById("navHome")

function changeMe(){
    changeColor.classList.add("lila")
    changeColor.innerHTML = "emoH"

}
function smallButton(){
    document.getElementById("element").classList.add("small")
    document.getElementById("element").classList.remove("big", "middle")
}


function middleButton(){
    document.getElementById("element").classList.add("middle")
    document.getElementById("element").classList.remove("big", "small")

}

function bigButton(){
    document.getElementById("element").classList.add("big")
    document.getElementById("element").classList.remove("small", "middle")


}











