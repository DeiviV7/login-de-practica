let input= [...document.querySelectorAll("input")];
console.log(input);
input.forEach(element => {
    element.addEventListener("keyup", ()=>{
        input[input.indexOf(element)+1].focus()
    })
});
