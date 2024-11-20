const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const YesBtn = document.querySelector(".Yes-btn");
const NoBtn = document.querySelector(".No-btn");

YesBtn.addEventListener("click", () => {
    question.innerHTML = "Sel kor sl oun yaa del!";
    gif.src = 
        "https://i.giphy.com/iCVzZwwE6QNAV2tEE0.webp";
});

NoBtn.addEventListener("mouseover", () => {
    const NoBtnRect = NoBtn.getBoundingClientRect();
    const maxX = window.innerWidth - NoBtnRect.width;
    const maxY = window.innerHeight - NoBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    NoBtn.style.left = randomX + "px";
    NoBtn.style.top = randomY + "px";
});