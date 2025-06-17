const ins = document.getElementById("Ins");
const insB = document.getElementById("insClose");
const Images = document.querySelectorAll("img"); 
const insImg = document.getElementById("I");

ins.classList.toggle("Hidden");
ins.style.visibility = "Visible";
insB.addEventListener('click', () => {ins.classList.toggle("Hidden")});

Images.forEach(img => {
    if(img.id != "I")
    {
        img.addEventListener('click', () => {ins.classList.toggle("Hidden"), insImg.src = img.src;});
    }
});