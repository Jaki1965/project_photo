const smoothLinks = document.querySelectorAll('a[href^="#"]'); /* в переменную smoothLinks забираем все теги вида href="#__" */
const buttonLine = document.querySelector('.header__lines'); /* в переменную buttonLine забираем селектор кнопки из трех полосочек */
const buttonCross = document.querySelector('.header__cross'); /* в переменную buttonCross забираем селектор кнпки крестика */
const menuMidleOff = document.querySelector('.header__midle_off'); /* в переменную menuOff забираем селектор модификатора - доп. менб отключено */
const menuBasicOff = document.querySelector('.header__basic'); /* забираем в переменную селектор главного меню */

/* функция открытия дополнителього меню при нажатии на кнопку из трех линий */
buttonLine.addEventListener('click', function(evt) {
    menuMidleOff.classList.remove('header__midle_off');
    menuBasicOff.classList.add('header__basic_off');
});

buttonCross.addEventListener('click', function(evt) {
    menuMidleOff.classList.add('header__midle_off')
    menuBasicOff.classList.remove('header__basic_off');
});




for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (evt) {
        evt.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};