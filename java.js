/*=============================
PULSE ABOUT PAGE
Part 1 JavaScript
=============================*/

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-in-out"
});

/*=============================
Floating Cards Animation
=============================*/

const cards = document.querySelectorAll(".floating-card");

cards.forEach((card, index) => {

    card.style.animationDelay = `${index * 0.4}s`;

});

/*=============================
Hero Image Mouse Effect
=============================*/

const heroImage = document.querySelector(".hero-image");

if(heroImage){

document.addEventListener("mousemove",(e)=>{

const x = (window.innerWidth/2 - e.clientX)/35;

const y = (window.innerHeight/2 - e.clientY)/35;

heroImage.style.transform=`translate(${x}px,${y}px)`;

});

}

/*=============================
Glass Card Hover
=============================*/

const glassCards=document.querySelectorAll(".glass-card");

glassCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});

/*=============================
Feature Card Hover
=============================*/

const featureCards=document.querySelectorAll(".feature-card");

featureCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transition=".4s";

card.style.transform="translateY(-12px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});

/*=============================
Smooth Scroll
=============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/*=============================
Button Ripple Effect
=============================*/

const buttons=document.querySelectorAll(".btn");

buttons.forEach(btn=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=circle.style.height=`${diameter}px`;

circle.style.left=`${e.offsetX-diameter/2}px`;

circle.style.top=`${e.offsetY-diameter/2}px`;

circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});

/*=============================
Counter Animation
==============================*/

const counters=document.querySelectorAll(".counter");

const speed=200;

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const update=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const inc=Math.ceil(target/speed);

if(count<target){

counter.innerText=count+inc;

setTimeout(update,15);

}else{

counter.innerText=target.toLocaleString();

}

};

update();

observer.unobserve(counter);

}

});

});

counters.forEach(counter=>{

observer.observe(counter);

});


/*==========================
AI Card Animation
==========================*/

const aiCards=document.querySelectorAll(".ai-card");

aiCards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.background=

`radial-gradient(circle at ${x}px ${y}px,
rgba(94,234,212,.15),
white 70%)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="white";

});

});

// Progress Animation

window.addEventListener("load",()=>{

const progress=document.querySelector(".progress-bar");

progress.style.width="0";

setTimeout(()=>{

progress.style.width="78%";

progress.style.transition="2s";

},500);

});