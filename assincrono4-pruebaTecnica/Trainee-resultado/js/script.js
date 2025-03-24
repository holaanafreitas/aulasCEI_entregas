
// declare the variables
const projects = document.querySelectorAll(".project");
const container = document.getElementById("main-container");
const body = document.getElementById("myBody");

projects.forEach((project, idx) => {
    project.addEventListener("mouseover", () => {
        // Add a dimmed effect to all other projects
        projects.forEach((p, i) => {
            if (i !== idx) p.classList.add("dimmed");
        });

        // Change background image on hover
        const imgList = [
            "./img/image_1.jpg",
            "./img/image_2.jpg",
            "./img/image_3.jpg",
            "./img/image_4.jpg",
            "./img/image_5.jpg",
            "./img/image_6.jpg",
            "./img/image_7.jpg",
            "./img/image_8.jpg",
            "./img/image_9.jpg",
            "./img/image_10.jpg"
        ];

        body.style.backgroundImage = `url(${imgList[idx]})`;
        body.style.backgroundSize = "cover";
        body.style.backgroundPosition = "center";
        body.style.opacity = 0.7;
    });

    project.addEventListener("mouseout", () => {
        // Remove the dimmed effect from all projects
        projects.forEach(p => p.classList.remove("dimmed"));
        
        // Remove background image when mouse leaves
        body.style.backgroundImage = "none";
    });
});