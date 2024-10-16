const $menuBt = document.querySelector('.header__menu-bt');

const $menuList = document.querySelector('.header__menu-list');

$menuBt.addEventListener('click', () => {
    $menuList.classList.toggle('active');
});