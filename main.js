const toggle = document.getElementById("priceToggle");

const amounts = document.querySelectorAll(".amount");

const monthlyText = document.getElementById("monthlyText");
const yearlyText = document.getElementById("yearlyText");


toggle.addEventListener("change",()=>{


amounts.forEach(price=>{

if(toggle.checked){

price.textContent = price.dataset.year;

}else{

price.textContent = price.dataset.month;

}

});


if(toggle.checked){

yearlyText.classList.add("active");
monthlyText.classList.remove("active");

}else{

monthlyText.classList.add("active");
yearlyText.classList.remove("active");

}


});



// Scroll Reveal Animations

ScrollReveal().reveal('.pricing-title', {
    delay: 200,
    distance: '50px',
    origin: 'top',
    duration: 900
});


ScrollReveal().reveal('.pricing-card', {

    interval:150,
    delay:200,
    distance:'60px',
    origin:'bottom',
    duration:1000

});


ScrollReveal().reveal('.faq-title, .accordion', {

    delay:200,
    distance:'50px',
    origin:'bottom',
    duration:900

});


ScrollReveal().reveal('.cta-box', {

    delay:200,
    distance:'70px',
    origin:'left',
    duration:1000

});


ScrollReveal().reveal('.pulse-footer', {

    delay:200,
    distance:'50px',
    origin:'bottom',
    duration:900

});



const counters = document.querySelectorAll(".counter");


let started = false;


window.addEventListener("scroll",()=>{


const stats = document.querySelector(".stats-section");


if(!stats) return;


const position = stats.getBoundingClientRect().top;


if(position < window.innerHeight - 100 && !started){


counters.forEach(counter=>{


let target = +counter.dataset.target;

let count = 0;


let update = setInterval(()=>{


count += Math.ceil(target / 100);


if(count >= target){

count = target;
clearInterval(update);

}


counter.innerHTML = count.toLocaleString();


},20);



});


started = true;


}


});



window.addEventListener("load",()=>{

document.querySelector(".loader")
.classList.add("hide");

});