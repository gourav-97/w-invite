/* ===========================================
   LOADER
=========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1800);

});

/* ===========================================
   MUSIC
=========================================== */

const music = document.getElementById("bgMusic");

const musicBtn = document.getElementById("musicToggle");

let playing = false;

musicBtn.addEventListener("click", () => {

    if (playing) {

        music.pause();

        musicBtn.innerHTML = "♫";

        playing = false;

    } else {

        music.play();

        musicBtn.innerHTML = "❚❚";

        playing = true;

    }

});

/* ===========================================
   COUNTDOWN
=========================================== */

const weddingDate = new Date("December 11, 2026 00:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance <= 0) {

        document.getElementById("days").innerHTML = "0";
        document.getElementById("hours").innerHTML = "0";
        document.getElementById("minutes").innerHTML = "0";
        document.getElementById("seconds").innerHTML = "0";

        return;

    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));

    const minutes = Math.floor((distance % (1000*60*60))/(1000*60));

    const seconds = Math.floor((distance % (1000*60))/1000);

    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;

}

updateCountdown();

setInterval(updateCountdown,1000);

/* ===========================================
   NAVBAR SCROLL
=========================================== */

const navbar = document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        navbar.style.padding="14px 7%";

        navbar.style.background="rgba(7,25,30,.92)";

        navbar.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

    }

    else{

        navbar.style.padding="22px 7%";

        navbar.style.background="rgba(8,30,36,.45)";

        navbar.style.boxShadow="none";

    }

});

/* ===========================================
   SCROLL REVEAL
=========================================== */

const revealElements=document.querySelectorAll(

    "section,.story-card,.event-item,.count-box,.photo,.gallery-grid img"

);

const observer=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},

{

threshold:.15

}

);

revealElements.forEach(el=>{

el.classList.add("reveal");

observer.observe(el);

});

/* ===========================================
   ACTIVE MENU
=========================================== */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

const height=section.clientHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});

/* ===========================================
   RSVP
=========================================== */

const scriptURL = "https://script.google.com/macros/s/AKfycbzE87ASxURJzf0cJcQz02wSS2W2iKG9oGZd4SNh-Xz5dggEwkshBUiL1L5O1mwaCYID/exec";

const form=document.getElementById("rsvpForm");

form.addEventListener("submit",async(e)=>{

e.preventDefault();

const selectedEvents=[];

document.querySelectorAll(".event-checkbox").forEach(box=>{

if(box.checked){

selectedEvents.push(box.value);

}

});

const data={

name:document.getElementById("name").value,

phone:document.getElementById("phone").value,

email:document.getElementById("email").value,

attendance:document.getElementById("attendance").value,

guests:document.getElementById("guests").value,

events:selectedEvents.join(", "),

message:document.getElementById("message").value

};

try{

await fetch(scriptURL,{

method:"POST",

mode:"no-cors",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify(data)

});

alert("Thank you! Your RSVP has been received.");

form.reset();

}

catch(e){

alert("Something went wrong.");

console.log(e);

}

});

/* ===========================================
   SMOOTH BUTTON RIPPLE
=========================================== */

document.querySelectorAll(".gold-button,button").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-4px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0px)";

});

});

/* ===========================================
   IMAGE PARALLAX
=========================================== */

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".landing");

let offset=window.pageYOffset;

hero.style.backgroundPositionY=offset*.35+"px";

});