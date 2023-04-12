
// Our-skills Animate Width 
let ProgressSpans = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skills");

window.onscroll = function() {
  if (window.scrollY >= section.offsetTop - 150) {
    ProgressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};

// Our Awesome Stats Increase Numbers On Scrolling

let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false;

document.addEventListener("scroll", function() {
  if (window.scrollY >= statsSection.offsetTop - 200) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
});

function startCount(ele) {
  let goalTarget = ele.dataset.goal;
  let counter = setInterval(() => {
    ele.textContent++;
    if (ele.textContent == goalTarget) {
      clearInterval(counter);
    }
  }, 2000 / goalTarget);
}

// Latest Events Countdown Timer

// Date and Time at the End Of The Year
let countDownDate = new Date("Dec 31 2023 23:59:59").getTime();

let count = setInterval(() => {
  // Current Date And Time
  let dateNow = new Date().getTime();
  // difference between countDownDate and dateNow
  let diff = countDownDate - dateNow;
  // Time Units
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
  let minutes = Math.floor((diff % (1000 * 60 * 60) / (1000 * 60)));
  let seconds = Math.floor((diff % (1000 * 60) / 1000));
  // Apply in the page
  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
  // difference less than 0 Stop The Timer
  if (diff < 0) {
    clearInterval(count);
  }
}, 1000);

// Scroll To Top

let scrollToTop = document.querySelector(".scroll-to-top");
let btn = document.querySelector(".up");

document.addEventListener("scroll", function() {
    if (window.scrollY >= 600) {
      scrollToTop.style.opacity = "1";
      scrollToTop.style.display = "block";
    } else {
      scrollToTop.style.opacity = "0";
      scrollToTop.style.display = "none";
    }
})

btn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};