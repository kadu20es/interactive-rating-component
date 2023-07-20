let valor = 0;
let temp = 0;
let number = document.querySelector('.number');

document.addEventListener('click', function (event) {
    if (event.target.matches('.number')) {
        valor = event.target.innerText;
        if (valor != temp){
            event.target.style.backgroundColor = "rgb(42, 46, 54)";
            event.target.style.color = "rgb(156, 163, 173)";
        }
        valor = event.target.innerText;
        temp = valor;
        let userChoice = {'value': valor};
        localStorage.setItem('userChoice', JSON.stringify(userChoice));
        changeColor(event)
    }
} )


/*document.querySelector('.number4').addEventListener('click', function(event) {
    valor = event.target.innerText;
    /* acessa o local storage e guarda o valor, recuperando-o em seguida */
   /* let userChoice = {'value': valor};
    localStorage.setItem('userChoice', JSON.stringify(userChoice));
});*/

document.querySelector('#submit').addEventListener("click", function(event){
    event.preventDefault();
    window.location.href = "./result.html";
    let text = document.createTextNode(valor);
    document.querySelector('value').appendChild(text);

});

function changeColor(event){
    event.target.style.backgroundColor = "rgb(156, 163, 173)";
    event.target.style.color = "#FFF";
}