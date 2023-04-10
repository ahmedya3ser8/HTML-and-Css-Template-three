
// Our-skills
let section = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".the-progress span");

window.onscroll = function() {
  if (window.scrollY >= section.offsetTop - 150) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};

// Our Awesome Stats

// let stats = document.querySelector(".stats");
// let number = document.querySelectorAll(".stats .box .number");
