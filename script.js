// এনিমেশন দেওয়া টেক্সট
document.addEventListener("DOMContentLoaded", function() {
    let textElement = document.querySelector(".animated-text");

    setInterval(() => {
        textElement.style.transform = "translateY(-10px)";
        setTimeout(() => {
            textElement.style.transform = "translateY(10px)";
        }, 1000);
    }, 2000);
});
