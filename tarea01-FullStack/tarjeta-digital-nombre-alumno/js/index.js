// Animacion del dato curioso

const image = document.getElementById('profileImage');
const button = document.getElementById('toggleImageBtn');
const msg = document.querySelector('.Btn-msg');

const images = ["./img/geologia.jpg", "./img/paulartreides.jpg"];
let current = 0;
let msgVisible = false;

button.addEventListener ("click", () => {
    current = (current + 1) % images.length;
    image.src = images[current];

    //Toggle msg
    if (!msgVisible) {
        msg.innerHTML = "Rafael es fan de Dune"
        msgVisible = true;
    } else {
        msg.innerHTML = "";
        msgVisible = false;
    }
})
