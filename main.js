let number = document.getElementById("number");
let counter = 0;
setInterval(() =>{
    if(counter ==83){
        clearInterval();
    }else{
        counter += 1;
        number.innerHTML = counter + "%";
    }

}, 48);