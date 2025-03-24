// Hàm áp dụng hiệu ứng gõ chữ cho các phần tử có lớp .typewriter
function applyTypewriterEffect() {
  const typewriterElements = document.querySelectorAll(".typewriter");
  typewriterElements.forEach(el => {
    const text = el.innerText;
    el.innerHTML = ""; // Xóa nội dung ban đầu
    const letters = text.split("");
    letters.forEach((letter, index) => {
      const span = document.createElement("span");
      span.innerText = letter;
      span.style.opacity = 0;
      span.style.display = "inline-block";
      el.appendChild(span);
      // Hiệu ứng xuất hiện cho mỗi chữ với độ trễ 0.1 giây cho mỗi chữ
      setTimeout(() => {
        span.style.transition = "opacity 0.3s ease-in";
        span.style.opacity = 1;
      }, 100 * index);
    });
  });
}

// Áp dụng hiệu ứng khi DOM đã tải xong
document.addEventListener("DOMContentLoaded", function () {
  applyTypewriterEffect();
});

// Hiệu ứng ẩn/hiện thanh công cụ khi cuộn
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.classList.add("hidden-nav");
  } else {
    navbar.classList.remove("hidden-nav");
  }
  lastScrollTop = scrollTop;
});