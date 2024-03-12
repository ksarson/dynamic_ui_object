function initializeWebsite() {
  console.log('Template');
}

document.querySelector('.button').addEventListener('click', () => {
  document.querySelector('.navbar').style.display = 'flex'; // Display the navbar
  document.querySelector('.button').style.display = 'none'; // Hide the button
  document.querySelector('.spacer').style.display = 'none'; // Hide the spacer to keep title even
});

document.querySelector('.navitem').addEventListener('click', (event) => {
  const { target } = event;
  if (target.classList.contains('navitem')) {
    document.querySelector('.navbar').style.display = 'none'; // Hide the navbar
    document.querySelector('.button').style.display = 'flex'; // Display the button
    document.querySelector('.spacer').style.display = 'flex'; // Display the spacer to keep title even
  }
});

const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const imageShare = 100 / carousel.children.length;

function updateCarousel() {
  const offset = -currentIndex * imageShare;
  carousel.style.transform = `translateX(${offset + imageShare}%)`;
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % carousel.children.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentIndex =
    (currentIndex - 1 + carousel.children.length) % carousel.children.length;
  updateCarousel();
});

export default initializeWebsite;
