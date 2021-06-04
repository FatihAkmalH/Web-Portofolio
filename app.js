var svgCircle = document.getElementById("svg-circle"),
step1 = document.getElementById("step1"),
step2 = document.getElementById("step2"),
step3 = document.getElementById("step3"),
step4 = document.getElementById("step4"),
step5 = document.getElementById("step5"),
main = document.getElementById("main");

const aboutContent = document.getElementById("about-content");
const contentBox = document.getElementById("contentBox"),
circleBox = document.getElementById("circle-box"),
hero = document.getElementById("hero"),
action = document.getElementById("action");

main.style.backgroundImage = "url(Image/bg1.png)";

action.addEventListener('click', ()=>{
    circleBox.style.visibility = "visible";
    circleBox.style.opacity = "1";
    hero.style.visibility = "hidden";
    hero.style.opacity = "0";
    main.style.backgroundImage = "url(Image/bg2.png)";
});


//dot click
step1.addEventListener('click', ()=>{
    svgCircle.style.strokeDashoffset = "1045";
    main.style.backgroundImage = "url(Image/bg3.png)";
    contentBox.style.transform = "translate(-145px, -420px)";
});
step2.addEventListener('click', ()=>{
    svgCircle.style.strokeDashoffset = "836";
    main.style.backgroundImage = "url(Image/bg4.png)";
    contentBox.style.transform = "translate(-150px, -850px)";
});
step3.addEventListener('click', ()=>{
    svgCircle.style.strokeDashoffset = "627";
    main.style.backgroundImage = "url(Image/bg7.png)";
    contentBox.style.transform = "translate(-150px, -1250px)";
});
step4.addEventListener('click', ()=>{
    svgCircle.style.strokeDashoffset = "313";
    main.style.backgroundImage = "url(Image/bg6.png)";
    contentBox.style.transform = "translate(-150px, -1650px)";
});
step5.addEventListener('click', ()=>{
    svgCircle.style.strokeDashoffset = "0";
    main.style.backgroundImage = "url(Image/bg2.png)";
    contentBox.style.transform = "translate(-145px, 0)";
});

//navbar click
const about = document.getElementById("about"),
navSkill = document.getElementById("skill"),
project = document.getElementById("project"),
home = document.getElementById("home"),
contact = document.getElementById("contact");

about.addEventListener('click', ()=>{
    svgCircle.style.strokeDashoffset = "1256";
    main.style.backgroundImage = "url(Image/bg2.png)";
    contentBox.style.transform = "translate(-145px, 0)";
    hero.style.visibility = "hidden";
    hero.style.opacity = "0";
    circleBox.style.visibility = "visible";
    circleBox.style.opacity = "1";
});
navSkill.addEventListener('click', ()=>{
    svgCircle.style.strokeDashoffset = "836";
    main.style.backgroundImage = "url(Image/bg4.png)";
    contentBox.style.transform = "translate(-150px, -850px)";
    hero.style.visibility = "hidden";
    hero.style.opacity = "0";
    circleBox.style.visibility = "visible";
    circleBox.style.opacity = "1";
});
project.addEventListener('click', ()=>{
    svgCircle.style.strokeDashoffset = "627";
    main.style.backgroundImage = "url(Image/bg7.png)";
    contentBox.style.transform = "translate(-150px, -1250px)";
    hero.style.visibility = "hidden";
    hero.style.opacity = "0";
    circleBox.style.visibility = "visible";
    circleBox.style.opacity = "1";
});
contact.addEventListener('click', ()=>{
    svgCircle.style.strokeDashoffset = "313";
    main.style.backgroundImage = "url(Image/bg6.png)";
    contentBox.style.transform = "translate(-150px, -1650px)";
    hero.style.visibility = "hidden";
    hero.style.opacity = "0";
    circleBox.style.visibility = "visible";
    circleBox.style.opacity = "1";
});
home.addEventListener('click', ()=>{
    circleBox.style.visibility = "hidden";
    circleBox.style.opacity = "0";
    hero.style.visibility = "visible";
    hero.style.opacity = "1";
    main.style.backgroundImage = "url(Image/bg1.png)";
});


//main content click
aboutContent.addEventListener('click', ()=>{
    svgCircle.style.strokeDashoffset = "1045";
    main.style.backgroundImage = "url(Image/bg3.png)";
    contentBox.style.transform = "translate(-145px, -420px)";
});




// SKill Slide
let skill_Index = 1;
showSkill(skill_Index);

function plusSlide(n) {
    showSkill(skill_Index += n);
}
function currentSkill(n) {
    showSkill(skill_Index = n);
}

function showSkill(n) {
    let skill = document.getElementsByClassName("skill");
    let slider = document.getElementById("slider1, slider2");
    if (n > skill.length) {
        skill_Index = 1;
    }
    if (n < 1) {
        skill_Index = skill.length;
    }

    for (let i = 0; i < skill.length; i++) {
        skill[i].style.display = "none";
    }
    skill[skill_Index-1].style.display = "block";
}


// if you want to use Media QUery

// function myQuery(x) {
//     if (x.matches) {
//         main.innerHTML = "Maaf Blm ada tampilan untuk mobile";
//         main.style.color = "#fff";
//         main.style.textAlign = "center";
//     }
// }
// var x = window.matchMedia("(max-width: 600px)");
// myQuery(x);