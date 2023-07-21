const cardOne = document.querySelector('.cardOne');
const cardTwo = document.querySelector('.cardTwo');
const button = document.querySelector('#submit');
const ratings = document.getElementsByClassName('number');
const valor = document.getElementById("valor");
let value = "none";

button.addEventListener('click', function(event){
    event.preventDefault();
    cardOne.style.display = "none";
    cardTwo.style.display = "block";
    let text = document.createTextNode(value);
    valor.appendChild(text);
});

for (const i in ratings) {
    console.log(ratings[i]);
    ratings[i].addEventListener('click', function(event){
        event.preventDefault();
        value = event.currentTarget.innerHTML;
    })
}

// code improvements based on https://github.com/Mbibhuprasad/Interactive-rating-component project.