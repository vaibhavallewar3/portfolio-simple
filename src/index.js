
var typed = new Typed(".typing", {
    strings: ["Web Developer.", "React Developer.", "Node.js Developer.", "Web Designer.",],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Total Experience
const totalExp = document.getElementById('total_exp');
const today = new Date();
const month = today.getMonth() > 0 ? today.getMonth() + ' Month' : '';
totalExp.innerHTML = `${today.getFullYear() - 2023} Years ${month} `;