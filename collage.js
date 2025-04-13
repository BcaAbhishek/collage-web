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