const allImages = document.querySelectorAll('.rotate-img');
let index = 0;

setInterval(() => {
  allImages.forEach((img, i) => {
    img.style.opacity = (i === index) ? '1' : '0.3'; // Current image is visible, others faded
  });

  index = (index + 1) % allImages.length;
}, 3000);