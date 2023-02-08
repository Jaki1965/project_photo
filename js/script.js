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
const buttonCourseNext = document.querySelector('.coorse__image-button-next'); /* забираем селектор кнопки ВПЕРЕД в верхнем слайдере */
const buttonCoursePrev = document.querySelector('.coorse__image-button-prev'); /* забираем селектор кнопки НАЗАД в верхнем слайдере */

const imagesCourseContainer = document.querySelectorAll('.course__image-container > img'); /* забираем селекторы только картинок (в блоке есть еще и кнопки) */
const imagesCourseItems = Array.from(imagesCourseContainer); /* формируем массив из элементов img? чтобы иметь возможность работать с индексами */


console.log(imagesCourseContainer);
console.log(imagesCourseItems);


// console.log(buttonCourseNext);
// console.log(buttonCoursePrev);
// console.log(buttonCourse);


// Создаем функцию, которая будет плано открывать картинку. У функции два параметра element - блок который открываем, speed - скорость с котрой открываем

function showImage(element, speed) {
  const timeChange = setInterval(() => {  
    element.classList.remove('course__slider-photo_off'); 
    let imageOpasity = +element.style.opacity;          
    if (imageOpasity >= 1) {                     
      clearInterval(timeChange);                                                   
    }
    imageOpasity += 0.01;                       
    element.style.opacity = imageOpasity;
  }, speed)                                     
};

// Создаем функцию, котрая будет плавно скрывать картинку. У функции два параметра element - блок который скрываем, speed - скорость с котрой скрываем

function hiddenImage(element, speed) {
  const timeChange = setInterval(() => {         
    let imageOpasity = +element.style.opacity;   
    if (imageOpasity <= 0) {                     
      clearInterval(timeChange);
      element.classList.add('course__slider-photo_off');    // как только станет невидимым - блок display: none;        
    }
    imageOpasity -= 0.01;                       
    element.style.opacity = imageOpasity;
  }, speed)                                     
};


let index_img = 0;
imagesCourseItems.forEach((image, index_img) => {
  if (index_img == 0){
    imagesCourseItems[index_img].style.zIndex = 1;
  }
  
});

function showImageCourse(element) {
  element.classList.remove('course__image_visible_none');
  element.classList.add('course__image_visible_yes');
};

function hiddenImageCourse(element) {
  element.classList.remove('course__image_visible_yes');
  element.classList.add('course__image_visible_none');
};


buttonCourseNext.addEventListener('click', (evt) => {
  hiddenImageCourse(imagesCourseItems[index_img])
  imagesCourseItems[index_img].style.zIndex = 1;
  index_img += 1;
  if (index_img == imagesCourseItems.length){
    index_img = 0;
  }
  imagesCourseItems[index_img].style.zIndex = 2;
  showImageCourse(imagesCourseItems[index_img]);
});

buttonCoursePrev.addEventListener('click', (evt) => {
  hiddenImageCourse(imagesCourseItems[index_img])
  imagesCourseItems[index_img].style.zIndex = 1;
  if (index_img == 0) {
    index_img = imagesCourseItems.length;
  }
  index_img -= 1;
  imagesCourseItems[index_img].style.zIndex = 2;
  showImageCourse(imagesCourseItems[index_img]);
});


// function showImageCourse(element, speed) {
//   const timeChange = setInterval(() => {        
//     let imageOpasity = +element.style.opacity;   
//     if (imageOpasity >= 1) {                     
//       clearInterval(timeChange);             
//     }
//     imageOpasity += 0.01;                       
//     element.style.opacity = imageOpasity;
//   }, speed);                                   
// };




// function hiddenImageCourse(element, speed) {
//   const timeChange = setInterval(() => {         
//     let imageOpasity = +element.style.opacity;   
//     if (imageOpasity <= 0) {                     
//       clearInterval(timeChange);       
//     }
//     imageOpasity -= 0.01;                       
//     element.style.opacity = imageOpasity;
//   }, speed)                                     
// };


// function showImageCourse(element) {
//   element.classList.remove('course__image_visible_none');
//   element.classList.add('course__image_visible_yes');
// };

// buttonCourseNext.addEventListener('click', (evt) => {
//   showImageCourse(pictureCourse);
// });


// function hiddenImageCourse(element) {
//   element.classList.remove('course__image_visible_yes');
//   element.classList.add('course__image_visible_none');
// };

// buttonCoursePrev.addEventListener('click', (evt) => {
//   hiddenImageCourse(pictureCourse);
// });




// buttonCourseNext.addEventListener('click', (evt) => {

// });







/* этот скрипт реализует плавное исчезновение при первом клике кнопки и плавное появление при повторном клике */
// let counter = 0;
// buttonCourse.addEventListener('click', function(event) {
//   counter ++;
//   if (counter % 2 !== 0) {
//     pictureCourse.style.opacity = 1;
//     hiddenImageCourse(pictureCourse, 3);
//   } 
//   if (counter % 2 == 0) {
//     showImageCourse(pictureCourse, 3);
//   }
  
// });





sliderCourseItems.forEach((slide, index) => {
   if (index !== 0){
    slide.classList.add('course__slider-photo_off'); // обходим весь массив и всем слайдам кроме первого (index == 0) навешиваем закрывающий модификатор 
    
   }
});

    let index = 0;
    sliderCourseButtonNext.addEventListener('click', (evt) => {
      hiddenImage(sliderCourseItems[index], 2);
      index +=1;
      if (index == sliderCourseItems.length) {
        index = 0;
      }
      showImage(sliderCourseItems[index], 2);
    });

    sliderCourseButtonPrev.addEventListener('click', (evt) => {
      hiddenImage(sliderCourseItems[index], 2);
      if (index == 0) {
        index = sliderCourseItems.length;
      }
      index -=1;
      showImage(sliderCourseItems[index], 2);
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