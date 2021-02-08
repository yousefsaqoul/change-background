

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



function changeMyColor()
{
    let changeCo = Math.floor(Math.random() * 1843837294).toString(16);
    document.body.style.backgroundColor = '#' + changeCo

}




let vorName = document.getElementById('vorname');
let nachName = document.getElementById('nachname');
let land = document.getElementById('land');
document.getElementById("form1").addEventListener('submit', function (e){

    e.preventDefault();
    console.log('FullName:' + vorName.value + ' ' + nachName.value + ' ' + land.value);

})








