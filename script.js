// Get all the images
const images = document.querySelectorAll('.image');

let currentIndex = 0;

function revealNextImage() {
  // Hide the current image
  images[currentIndex].classList.remove('show');

  // Increment the index to reveal the next image
  currentIndex = (currentIndex + 1) % images.length;

  // Show the next image after a short delay
  setTimeout(() => {
    images[currentIndex].classList.add('show');
  }, 100); // Adjust the delay as needed
}

// Show the first image initially
images[currentIndex].classList.add('show');

// Start revealing images in a loop
setInterval(revealNextImage, 3000); // Adjust the duration as needed
