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


// смена цвета хедера при скролле
window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", this.window.scrollY > 0);
})


// оценка фильма
const ratings = document.querySelectorAll(".rating");
if (ratings.length>0){
    initRatings();
}

function initRatings(){
    let ratingActive, ratingValue;
    for(let index = 0; index < ratings.length; index++){
        const rating = ratings[index];
        initRating(rating);
    }

    function initRating(rating){
        initRatingVars(rating);

    
        setRatingActiveWidth();

        if (rating.classList.contains('rating_set')){
            setRating(rating);
        }
    }

    function initRatingVars(rating){
        ratingActive = rating.querySelector(".rating__active");
        ratingValue = rating.querySelector(".rating__value");
    }

    function setRatingActiveWidth(index=ratingValue.innerHTML){
        const ratingActiveWidth = index / 0.05;
        ratingActive.style.width = `${ratingActiveWidth}%`;
    }

    function setRating(rating){
        const ratingItems = rating.querySelectorAll(".rating__item");
        for (let index =0; index < ratingItems.length;index++){
            const ratingItem = ratingItems[index];
            ratingItem.addEventListener("mouseenter", function(e){
                initRatings(rating);
                setRatingActiveWidth(ratingItem.value);
            });

            ratingItem.addEventListener("mouseleave", function(e){
                setRatingActiveWidth();
            })

            ratingItem.addEventListener("click", function(e){
                initRatingVars(rating);
                ratingValue.innerHTML = index+1;
                setRatingActiveWidth();
            })
        }

    }
}


// смена темы на главной странице
let switchMode = document.getElementById("switchmode");
switchMode.onclick = function(){
    let theme = document.getElementById("theme");

    if (theme.getAttribute("href")=="light.css"){
        theme.href = "styles.css";
    }
    else
    {
        theme.href = "light.css";
    }
}

