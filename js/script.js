const smoothLinks = document.querySelectorAll('a[href^="#"]'); /* в переменную smoothLinks забираем все теги вида href="#__" */
const buttonLine = document.querySelector('.header__lines'); /* в переменную buttonLine забираем селектор кнопки из трех полосочек */
const buttonCross = document.querySelector('.header__cross'); /* в переменную buttonCross забираем селектор кнпки крестика */
const menuMidleOff = document.querySelector('.header__midle_off'); /* в переменную menuOff забираем селектор модификатора - доп. менб отключено */
const menuBasicOff = document.querySelector('.header__basic'); /* забираем в переменную селектор главного меню */

const sliderCourse = document.querySelector('.course__slider'); /* забираем селектор контейнера с фотографиями */
const sliderCourseItems = Array.from(sliderCourse.children) /* забираем все дочерние элементы слайдера, т.е. все картинки, какие есть и формируем массив */
const sliderCourseButtonNext = document.querySelector('.course__slider-button_next'); /* забираем селектор кнопки "вперед " */
const sliderCourseButtonPrev = document.querySelector('.course__slider-button_prev'); /* забираем селектор кнопки назад" */

const pictureCourse = document.querySelector('.course__image'); /* забираем селектор картинки */
const buttonCourse = document.querySelector('.course > button'); /* забиарем селектор большой кнопки в разделе КУРСЫ */
// let imageOpacity = pictureCourse.style.opacity; 


console.log(buttonCourse);

// console.log(pictureCourse);
// console.log(pictureCourseOpacity);

// function fadeIn(element, speed) {
  
//   const step = 1 / speed;
//     const interval = setTimeout(function() {
//       if (+element.style.opacity >= 1)
//       clearTimeout(interval);
//     element.style.opacity = +pictureCourse.style.opacity + step;
//   }, speed / 1000);
   
    
// };

// Создаем функцию, которая будет плано открывать картинку. У функции два параметра element - блок который открываем, speed - скорость с котрой открываем

function showImage(element, speed) {
  const timeChange = setInterval(() => {         // setInterval устанавливает с какой периодичностью нужно исполнять программу // в целом написание такое setInterval(() => { здесь, что сделать}, время интервала в милисикундах)
    let imageOpasity = +element.style.opacity;   // создаем переменную в котрую заберем текущее значение opasity 
    if (imageOpasity >= 1) {                     // если opasity больше или рано 1, то очищаем таймер
      clearInterval(timeChange);
      //element.classList.add('course__slider-photo_off');   // после чего удаляем блок - здесь это не нужно оставил для памяти              
    }
    imageOpasity += 0.01;                       // если еще не дошли до единицы, то на каждом повторении увеличиваем opasity на 0,01
    element.style.opacity = imageOpasity;
  }, speed)                                     // повторяем итерацию через каждые speed - милисикунд
};

// Создаем функцию, котрая будет плавно скрывать картинку. У функции два параметра element - блок который скрываем, speed - скорость с котрой скрываем

function hiddenImage(element, speed) {
  const timeChange = setInterval(() => {         
    let imageOpasity = +element.style.opacity;   
    if (imageOpasity <= 0) {                     
      clearInterval(timeChange);
      // element.classList.add('course__slider-photo_off');    // как только станет невидимым - блок display: none;        
    }
    imageOpasity -= 0.01;                       
    element.style.opacity = imageOpasity;
  }, speed)                                     
};

/* этот скрипт реализует плавное исчезновение при первом клике кнопки и плавное появление при повторном клике */
  let counter = 0;
buttonCourse.addEventListener('click', function(event) {
  counter ++;
  console.log(counter);
  if (counter % 2 !== 0) {
    pictureCourse.style.opacity = 1;
    hiddenImage(pictureCourse, 3);
  } 
  if (counter % 2 == 0) {
    showImage(pictureCourse, 3);
  }
  
});





sliderCourseItems.forEach((slide, index) => {
   if (index !== 0){
    slide.classList.add('course__slider-photo_off'); // обходим весь массив и всем слайдам кроме первого (index == 0) навешиваем закрывающий модификатор 
    
   }
});

    let index = 0;
    sliderCourseButtonNext.addEventListener('click', (evt) => {
      sliderCourseItems[index].classList.add('course__slider-photo_off');
      index +=1;
      if (index == sliderCourseItems.length) {
        index = 0;
      }
      sliderCourseItems[index].classList.remove('course__slider-photo_off');
    });

    sliderCourseButtonPrev.addEventListener('click', (evt) => {
      sliderCourseItems[index].classList.add('course__slider-photo_off');
      if (index == 0) {
        index = sliderCourseItems.length;
      }
      index -=1;
      sliderCourseItems[index].classList.remove('course__slider-photo_off');
    });



/* функция открытия дополнителього меню при нажатии на кнопку из трех линий */
buttonLine.addEventListener('click', function(evt) {
    menuMidleOff.classList.remove('header__midle_off');
    menuBasicOff.classList.add('header__basic_off');
});

/* функция закрытия доп меню при нажатии на кнопку крестик */
buttonCross.addEventListener('click', function(evt) {
    menuMidleOff.classList.add('header__midle_off')
    menuBasicOff.classList.remove('header__basic_off');
});

/* плавный скрол к пункту который кликнули в меню */

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