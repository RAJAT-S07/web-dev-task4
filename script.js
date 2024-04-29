// JavaScript code can be added here for interactivity
// For example, you can add click event listeners to "Watch Now" buttons
document.addEventListener('DOMContentLoaded', function() {
  const watchNowButtons = document.querySelectorAll('.watch-now');

  watchNowButtons.forEach(button => {
    button.addEventListener('click', function() {
      const showName = button.previousElementSibling.textContent; // Get the show name
      alert(`You clicked "Watch Now" for: ${showName}`);
      // You can add more functionality here, such as redirecting to a video player page
    });
  });
});
// JavaScript code for slideshow functionality
document.addEventListener('DOMContentLoaded', function() {
  const sliders = document.querySelectorAll('.slider');

  sliders.forEach(slider => {
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    
    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // Adjust the scrolling speed
      slider.scrollLeft = scrollLeft - walk;
    });
  });
});
