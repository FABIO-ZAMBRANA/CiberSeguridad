// Modal setup
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-image");
const captionText = document.getElementById("caption");
const images = document.querySelectorAll(".img-ingenieria-social"); // Selecciona todas las imágenes
const closeModal = document.querySelector(".close");

images.forEach(img => {
    img.addEventListener("click", function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerText = this.alt;
    });
});

// Close modal
closeModal.addEventListener("click", function () {
    modal.style.display = "none";
});

// Close modal on clicking outside the image
modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
