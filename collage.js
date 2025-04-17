document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll('.stat-card span');

    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      let current = 0;
      const increment = target / 100; // adjust speed

      const updateCounter = () => {
        if (current < target) {
          current += increment;
          counter.textContent = Math.ceil(current) + (counter.getAttribute('data-target') >= 100 ? '' : '+');
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target + (target >= 100 ? '' : '+');
        }
      };

      updateCounter();
    });
  });





  const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.carousel-button.prev');
const nextBtn = document.querySelector('.carousel-button.next');

let index = 1;
let itemWidth = items[0].offsetWidth + 30; // width + margin

// Clone first and last items for smooth looping
const firstClone = items[0].cloneNode(true);
const lastClone = items[items.length - 1].cloneNode(true);

track.appendChild(firstClone);
track.insertBefore(lastClone, track.firstChild);

// Update carousel to show the first "real" item
function updateCarousel() {
  track.style.transition = 'transform 0.5s ease';
  track.style.transform = `translateX(${-index * itemWidth}px)`;
}

// Snap to loop when at clones
function checkLoop() {
  const totalItems = document.querySelectorAll('.carousel-item').length;
  if (index === totalItems - 1) {
    setTimeout(() => {
      track.style.transition = 'none';
      index = 1;
      track.style.transform = `translateX(${-index * itemWidth}px)`;
    }, 500);
  }
  if (index === 0) {
    setTimeout(() => {
      track.style.transition = 'none';
      index = totalItems - 2;
      track.style.transform = `translateX(${-index * itemWidth}px)`;
    }, 500);
  }
}

function nextSlide() {
  const totalItems = document.querySelectorAll('.carousel-item').length;
  if (index < totalItems - 1) {
    index++;
    updateCarousel();
    checkLoop();
  }
}

function prevSlide() {
  if (index > 0) {
    index--;
    updateCarousel();
    checkLoop();
  }
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto sliding
setInterval(nextSlide, 5000);

// Adjust when window resizes
window.addEventListener('resize', () => {
  itemWidth = document.querySelector('.carousel-item').offsetWidth + 30;
  updateCarousel();
});

// Initial position
window.addEventListener('load', () => {
  updateCarousel();
});
