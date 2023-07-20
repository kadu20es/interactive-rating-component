let valor = 0;
let temp = null;
let number = document.querySelector('.number');

document.addEventListener('click', function (event) {
    changeColor(event);
    if (event.target.matches('.number')) {
        temp = event;
        valor = event.target.innerText;
        console.log(valor)
        let userChoice = {'value': valor};
        localStorage.setItem('userChoice', JSON.stringify(userChoice));
        changeColor(event);
    }
} )


document.querySelector('#submit').addEventListener("click", function(event){
    event.preventDefault();
    window.location.href = "./result.html";
    let text = document.createTextNode(valor);
    document.querySelector('value').appendChild(text);

});

function changeColor(event){
    if (temp != event && temp != null) {
        temp.target.style.backgroundColor = "rgb(42, 46, 54)";
        temp.target.style.color =  "rgb(124, 136, 152)";
    }
    event.target.style.backgroundColor = "rgb(156, 163, 173)";
    event.target.style.color = "#FFF";

}