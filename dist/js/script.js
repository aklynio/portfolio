const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('menu_active');
});

close.addEventListener('click', () => {
    menu.classList.remove('menu_active');
});

const percentage = document.querySelectorAll('.skills__ratings-percentage'),
      lines = document.querySelectorAll('.skills__ratings-yellow');

percentage.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});