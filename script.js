document.addEventListener("DOMContentLoaded", () => {
    const circles = document.querySelectorAll(".circle");
    const arrows = document.querySelectorAll(".arrow");
    const resetButton = document.getElementById("resetButton");

    const animationStates = Array(arrows.length).fill(false);

    function moveArrowToCircle(index) {
        if (animationStates[index]) return; 
        animationStates[index] = true; 
        const arrow = arrows[index];
        const circle = circles[index];

        
        const arrowPosition = arrow.getBoundingClientRect();
        const circlePosition = circle.getBoundingClientRect();
        const distance = circlePosition.left - arrowPosition.left - circle.offsetWidth;

        arrow.style.transition = "transform 1s ease";
        arrow.style.transform = `translateX(${distance}px)`;


        setTimeout(() => {
            circle.style.backgroundColor = "gray";
            arrow.style.transition = "none";
            arrow.style.transform = ""; 
            animationStates[index] = false; 
        }, 1000); 
    }

    
    circles.forEach((circle, index) => {
        circle.addEventListener("click", () => moveArrowToCircle(index));
    });

    arrows.forEach((arrow, index) => {
        arrow.addEventListener("click", () => moveArrowToCircle(index));
    });

    resetButton.addEventListener("click", () => {
    
        circles[0].style.backgroundColor = "#FFD966";
        circles[1].style.backgroundColor = "#2B78E4";
        circles[2].style.backgroundColor = "#CC0000";
        circles[3].style.backgroundColor = "#6AA84F";

        
        arrows.forEach((arrow, index) => {
            arrow.style.transition = "none";
            arrow.style.transform = "";
            animationStates[index] = false; 
        });
    });
});
