const first = document.querySelector('.ball.first');
const second = document.querySelector('.ball.second');
const third = document.querySelector('.ball.third');
const fourth = document.querySelector('.ball.fourth');

first.style.width = "60px";
first.addEventListener("click", () => {
    if (first.style.width == "60px"){
        first.style.width = "100%";
        first.style.height = "200px";
        first.style.borderRadius = "20px";
    }else{
        first.style.width = "60px";
        first.style.height = "60px";
        first.style.borderRadius = "50px";
    }
});

second.style.width = "60px";
second.addEventListener("click", () => {
    if (second.style.width == "60px"){
        second.style.width = "100%";
        second.style.height = "200px";
        second.style.borderRadius = "20px";
    }else{
        second.style.width = "60px";
        second.style.height = "60px";
        second.style.borderRadius = "50px";
    }
});

third.style.width = "60px";
third.addEventListener("click", () => {
    if (third.style.width == "60px"){
        third.style.width = "100%";
        third.style.height = "200px";
        third.style.borderRadius = "20px";
    }else{
        third.style.width = "60px";
        third.style.height = "60px";
        third.style.borderRadius = "50px";
    }
});

fourth.style.width = "60px";
fourth.addEventListener("click", () => {
    if (fourth.style.width == "60px"){
        fourth.style.width = "100%";
        fourth.style.height = "200px";
        fourth.style.borderRadius = "20px";
    }else{
        fourth.style.width = "60px";
        fourth.style.height = "60px";
        fourth.style.borderRadius = "50px";
    }
});
