"use strict"

function truncate(str, maxlength)
{
    maxlength=Number(maxlength);
    if (str.length > maxlength){
        str = str.slice(0, maxlength-3) + "...";
    }
    return str;
}

let textElements  = document.querySelectorAll(".year_descr");

for (let i = 0; i < textElements.length; i++) {
    textElements[i].textContent = truncate(textElements[i].textContent,150);
}

window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", this.window.scrollY > 0);
})