/*const value = document.querySelector('number').addEventListener('click', function(){
    console.log(value);
});*/
let valor = 0;

document.querySelector('.number4').addEventListener('click', function(event) {
    valor = event.target.innerText;
    console.log(valor);
    console.log(event);
})

document.querySelector('#submit').addEventListener("click", function(event){
    event.preventDefault();
    window.location.href = "./result.html";
})
