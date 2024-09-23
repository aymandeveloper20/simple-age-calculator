let age = document.getElementById("age");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    let datenow = new Date();
    let year = datenow.getFullYear();
    let age = year - parseInt(document.getElementById("age").value);
    let display = document.querySelector(".display");
    if(isNaN(age)){
        display.innerHTML = "Please enter your age";
    }else{
        display.innerHTML = `You are ${age} years old`;
    }

});
