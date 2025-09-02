// Open modal
function openProject(id) {
  const modal = document.getElementById(id);
  modal.classList.remove("hidden");

  // initialize carousel for this modal
  initModalCarousel(modal);
}

// Close modal
function closeProject(id) {
  const modal = document.getElementById(id);
  modal.classList.add("hidden");
}

// Initialize image carousel inside modal
function initModalCarousel(modal) {
  const images = modal.querySelectorAll(".modal-content img");
  const prevBtn = modal.querySelector(".prev-btn");
  const nextBtn = modal.querySelector(".next-btn");

  if (!images.length || !prevBtn || !nextBtn) return;

  let currentIndex = 0;

  // Show only the active image
  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle("active", i === index);
    });
  }

  showImage(currentIndex);

  // Prev button
  prevBtn.onclick = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  };

  // Next button
  nextBtn.onclick = () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  };
}