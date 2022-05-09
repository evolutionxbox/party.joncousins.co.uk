const btns = document.querySelectorAll('.get-scrolling');

function onClick (e) {
  e.preventDefault();
  console.log('hi')

  const nextSection = this.closest('.article__section').nextElementSibling;

  nextSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
  });
}

[...btns].forEach(btn => btn.addEventListener('click', onClick));
