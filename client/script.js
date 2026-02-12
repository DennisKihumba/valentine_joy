const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const bouquet = document.getElementById("bouquet");
const music = document.getElementById("loveMusic");

yesBtn.addEventListener("click", () => {

    // Play romantic music
    music.play();

    // Change background glow
    document.body.classList.add("love-mode");

    // Show romantic message
    message.innerHTML = "You just made me the happiest person alive ❤️";

    // Show bouquet
    bouquet.classList.add("show");

    // Create floating hearts
    for (let i = 0; i < 20; i++) {
        setTimeout(createHeart, i * 200);
    }

});

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 20) + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
