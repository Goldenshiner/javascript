const buttons= document.querySelectorAll('.button')
const body= document.querySelector("body")

buttons.forEach( (button) => {
    button.addEventListener('click', function(event){
        if (event.target.id ==="pink"){
            body.style.backgroundColor = "pink"
        }
        if (event.target.id ==="yellow"){
            body.style.backgroundColor = "yellow"
        }
        if (event.target.id ==="blue"){
            body.style.backgroundColor = "lightblue"
        }
        if (event.target.id ==="orange"){
            body.style.backgroundColor = "orange"
        }
    })
});