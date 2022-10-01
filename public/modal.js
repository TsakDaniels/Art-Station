console.log("hello2");

document.querySelectorAll(".containerGrid img").forEach(image =>{
    image.onclick = () => {
    document.querySelector(".popup-image").style.display = "flex";
    document.querySelector(".popup-image img").src = image.getAttribute("src");
    document.querySelector(".popup-image img").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }
});

document.querySelector(".popup-image span").onclick = () => {
    document.querySelector(".popup-image").style.display = "none";
    
}