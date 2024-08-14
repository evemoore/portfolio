// Showing coding experience content
const codingExperienceDivs = document.querySelectorAll('.codingExperienceDivs');

codingExperienceDivs.forEach(div => {
    div.addEventListener('mouseover', function() {
        const header = this.querySelector('.codingExperienceHeader');
        const img = this.querySelector('.codingExperienceImg');
        const p = this.querySelector('.codingExperienceP');

        header.style.margin = '0 10px';
        img.style.display = 'none';
        p.style.display = 'block';
    });

    div.addEventListener('mouseout', function() {
        const header = this.querySelector('.codingExperienceHeader');
        const img = this.querySelector('.codingExperienceImg');
        const p = this.querySelector('.codingExperienceP');

        header.style.margin = '40px 10px 20px 10px';
        img.style.display = 'inline';
        p.style.display = 'none';
    });
});

// initialising swiper slideshow
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
 
  loopedSlides: 3,
  grabCursor: true,
  spaceBetween: 5,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

  // skills and qualities change colour when hovered over

  const coloursArr = ['hsla(125, 24%, 10%, 1)','hsla(125, 24%, 20%, 1)', 'hsla(125, 24%, 30%, 1)', 'hsla(125, 24%, 40%, 1)', 'hsla(125, 24%, 50%, 1)', 'hsla(125, 24%, 70%, 1)', 'hsla(125, 24%, 80%, 1)', 'hsla(125, 24%, 90%, 1)']

const skillIds = ['skillOne', 'skillTwo', 'skillThree', 'skillFour', 'skillFive', 'skillSix'];

skillIds.forEach(id => {
  const skillElement = document.getElementById(id);
  skillElement.addEventListener('mouseover', () => {
    const randomNum = Math.floor(Math.random() * coloursArr.length);
    skillElement.style.backgroundColor = coloursArr[randomNum];
  });
});