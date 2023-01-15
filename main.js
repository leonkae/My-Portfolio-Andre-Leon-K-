let number = document.getElementById("number");
let counter = 0;
setInterval(() =>{
    if(counter ==84){
        clearInterval();
    }else{
        counter += 1;
        number.innerHTML = counter + "%";
    }

}, 48);

// function myFunction(){
//     var element = document.body;
//     element.classList.toggle("dark-mode")
// }


const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-brightness-high-fill');
    if (this.classList.toggle('bi-moon')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition ='2.3s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transtion = '2.3s'
    }

})

// window.addEventListener('load', () => {
//     const preload =  document.querySelector('.preload')
//     preload.classList.add('preload-finish')
// })