// 🟦【下拉選單（舊式 collapse 用）】=========================
let dropdowns = document.querySelectorAll(".dropdown-btn");

dropdowns.forEach(function(btn) {
  btn.addEventListener("click", function() {
    this.classList.toggle("active");
    let dropdownContent = this.nextElementSibling;
    dropdownContent.classList.toggle("show");
  });
});

// 🟦【大圖輪播】==============================================
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // 🟨 防呆：若頁面沒有輪播圖，直接結束
  if (slides.length === 0) return;

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  if (dots[slideIndex - 1]) dots[slideIndex - 1].className += " active";
}



// 🟨 自動輪播，每5秒切換
if (document.getElementsByClassName("mySlides").length > 0) {
  setInterval(() => { plusSlides(1); }, 5000);
}

// 🟦【滾動進場動畫】==========================================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});

// 🟦【回到頂端按鈕】===========================================
let topBtn = document.getElementById("topBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// 🟦【收合區塊 (collapse)】====================================
let btn = document.getElementsByClassName("my-collapse");
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function() {
    this.nextElementSibling.classList.toggle("show"); // 🔸 控制內容展開
  });
}

// 🟦【🟥 手機版選單控制】======================================
function toggleMenu() {
  const navList = document.querySelector("nav ul");
  navList.classList.toggle("show"); // 🟥 點擊漢堡鈕 → 顯示/隱藏選單
}

// 🟥 手機下拉選單：點擊展開子項
document.addEventListener("DOMContentLoaded", () => {
  const dropdownLinks = document.querySelectorAll(".dropdown > a");

  dropdownLinks.forEach(link => {
    link.addEventListener("click", e => {
      if (window.innerWidth <= 768) { // 🟥 只在手機時啟動
        e.preventDefault(); // 阻止連結直接跳頁
        const dropdownContent = link.nextElementSibling;
        dropdownContent.classList.toggle("show"); // 展開或收合
      }
    });
  });
});

// 🟥 視窗放大時自動關閉手機選單
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    const navList = document.querySelector("nav ul");
    if (navList) navList.classList.remove("show");
  }
});
