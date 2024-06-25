document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".container-item");
  const nextButton = document.querySelector(".arrow-right");
  const prevButton = document.querySelector(".arrow-left");
  let currentIndex = 0;

  function showItem(index) {
    items.forEach((item, i) => {
      item.classList.toggle("active", i === index);
    });
  }

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
  });

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showItem(currentIndex);
  });

  showItem(currentIndex);
});
