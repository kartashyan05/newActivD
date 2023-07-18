"use strict";
import "./sass/style.scss";
import tabs from "./js/pack/tabs";
import modal from "./js/pack/modal";
import timer from "./js/pack/timer";
import cards from "./js/pack/cards";
import calculator from "./js/pack/calculator";
import forms from "./js/pack/forms";
import sliders from "./js/pack/sliders";
import { openModal } from "./js/pack/modal";

window.addEventListener("DOMContentLoaded", () => {
  const modalTimerId = setTimeout(
    () => openModal(".modal_wind", modalTimerId),
    50000
  );

  tabs(".menu__item", ".tabcontent", ".menu_items", "menu__item_active");
  modal("[data-modal]", ".modal_wind", modalTimerId);
  timer(".timer", "2023-08-30");
  cards();
  calculator();
  forms("form", modalTimerId);
  sliders({
    container: ".offer__slider",
    prevArrow: ".offer__slider-prev",
    nextArrow: ".offer__slider-next",
    slide: ".offer__slide",
    totalCounter: "#total",
    currentCounter: "#current",
    wrapper: ".offer__slider-wrapper",
    field: ".offer__slider-inner",
  });
});

//Tabs
/*   const tabs = document.querySelectorAll('.menu__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.menu_items');
    
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach(item => {
            item.classList.remove('menu__item_active');
        });
    }

    function showTabContent(i = 0) {
        
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('menu__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('menu__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    }); */
//Timer
/*  const deadline = "2023-05-30";

  function getTimeRemaining(endtime) {
    let days, hours, minutes, seconds;
    const t = Date.parse(endtime) - Date.parse(new Date());

    if (t <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      (days = Math.floor(t / (1000 * 60 * 60 * 24))),
        (hours = Math.floor((t / (1000 * 60 * 60)) % 24)),
        (minutes = Math.floor((t / 1000 / 60) % 60)),
        (seconds = Math.floor((t / 1000) % 60));
    }

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(".timer", deadline); */
//Modal
/* y
// Используем классы для карточек
/*  class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            //this.price = + this.price * this.transfer;
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.element = 'menu2__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
            
            element.innerHTML = `
                 
                    <img src=${this.src}  alt=${this.alt}>
                    <h3 class="menu2__item-subtitle">${this.title}</h3>
                    <div class="menu2__item-descr">${this.descr}</div>
                    <div class="menu2__item-divider"></div>
                    <div class="menu2__item-price">
                        <div class="menu2__item-cost">Цена:</div>
                        <div class="menu2__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
        
            `;
            this.parent.append(element);
        }
    }

    const getResource = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        
        return await res.json();
    };

     getResource('http://localhost:3000/menu')
         .then(data => {
             data.forEach(({img, altimg, title, descr, price}) => {
                 new MenuCard(img, altimg, title, descr, price, '.menu2__field .container').render();
             });
         }); */
/* axios.get('http://localhost:3000/menu')
        .then(data => {
            data.data.forEach(({ img, altimg, title, descr, price }) => {
                new MenuCard(img, altimg, title, descr, price, '.menu2__field .container').render();
            });
        }); */
/* new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        "Меню 'Фитнес'",
        "Меню 'Фитнес' - это новый подход к приготовлению блюд: больше свеовощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценойи высоким качеством!",
        9,
        '.menu2 .container',
        //'menu2__item',
        //'big'


    ).render();

      new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        "Меню 'Премиум'",
        "Меню 'Премиум' - В меню “Премиум” мы используем не только красивый дизайн упаковки, но икачественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода вресторан!",
        10,
          '.menu2 .container',
          'menu2__item'
        


    ).render();

      new MenuCard(
        "img/tabs/post.jpg",
        "post",
        "Меню 'Постное'",
        "Меню 'Фитнес' - это тщательный подбор ингредиентов: полное отсутствиепродуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количествобелков за счет тофу и импортных вегетарианских стейков.",
        11,
          '.menu2 .container',
        'menu2__item'


    ).render(); */
//Forms
/* const forms = document.querySelectorAll('form');

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы С вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        bindpostData(item);
    });

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: "Post",
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });
        
        return await res.json();
    };

    function bindpostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
            display:block;
            margin:0 auto;
            `; */
//form.append(statusMessage);
//form.insertAdjacentElement('afterend', statusMessage);
/*  const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            form.append(statusMessage); */
//const request = new XMLHttpRequest();
//request.open('POST', 'server.php');
//request.setRequestHeader('Content-type', 'application/json');
//const formData = new FormData(form);
/*  const object = {};
             formData.forEach(function (value, key) {
                 object[key] = value;
             }); */
//const json = JSON.stringify(Object.fromEntries(formData.entries()));
//const obj = { a: 23, b: 50 };
//console.log(Object.entries(obj));
//const json = JSON.stringify(object);
//request.send(json);
/* fetch('server.php', {
                method: "Post",
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(object)
            }) */
/*  postData('http://localhost:3000/requests', json)
                //.then(data => data.text())
                .then(data => {
                    console.log(data);
                    showThanksModal(message.success);
                
                    statusMessage.remove();
                }).catch(() => {
                    showThanksModal(message.failure);
                }).finally(() => {
                    form.reset();
                });
 */
/*  request.addEventListener('load', () => {
                 if (request.status === 200) {
                     console.log(request.response);
                     //statusMessage.textContent = message.success;
                    showThanksModal(message.success);
                     form.reset();
                     statusMessage.remove();
                 } else {
                     showThanksModal(message.failure);
                     //statusMessage.textContent = message.failure;
                 }
             }); */
/*   });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
        <div class ="modal__content">
        <div class="modal__close" data-close>&times;</div>
        <div class="modal__title">${message}</div>
        </div>
        `;

        document.querySelector('.modal_wind').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();

        }, 4000);
    } */
/*  fetch(' http://localhost:3000/menu')
        .then(data => data.json())
        .then(res => console.log(res));


     fetch('https://jsonplaceholder.typicode.com/posts', {
         method: "Post",
         body: JSON.stringify({ name: 'Alex' }),
         headers: {
             'Content-type': 'application/json'
         }
     })
         .then(response => response.json())
         .then(json => console.log(json));
  */
//Slider
/* const slides = document.querySelectorAll('.offer__slide'),
        slider = document.querySelector('.offer__slider'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current'),
        slidesWrapper = document.querySelector('.offer__slider-wrapper'),
        slidesField = document.querySelector('.offer__slider-inner'),
        width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1;
    let offset = 0;

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }


    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
        dots = [];
    indicators.classList.add('carousel-indicators');
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;

    slider.append(indicators);

    for (let i = 0; i <=slides.length-1 ; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }

    function deleteNotDigits(str) {
        return  +str.replace(/\D/g, '');
    }

    next.addEventListener('click', () => {
        if (offset == deleteNotDigits(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNotDigits(width) ;
        }


        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = 1;
    });

     prev.addEventListener('click', () => {
        if (offset == 0) {
            
        offset = deleteNotDigits(width)  * (slides.length - 1);
        } else {
            offset -= deleteNotDigits(width) ;
        }

          if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

         slidesField.style.transform = `translateX(-${offset}px)`;
         
         if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
         }
         
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = 1;
     });
    
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = deleteNotDigits(width)  * (slideTo -1);
            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
            } else {
                current.textContent = slideIndex;
            }

            dots.forEach(dot => dot.style.opacity = '.5');
            dots[slideIndex - 1].style.opacity = 1;
        });
    }) */
/* showSlides(slideIndex);

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
    } else {
        total.textContent = slides.length;
    }

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach(item => item.style.display = 'none');

        slides[slideIndex - 1].style.display = 'block';

        if (slides.length < 10) {
        current.textContent = `0${slideIndex}`;
        } else {
        current.textContent = `slideIndex`;
        }
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    prev.addEventListener('click',() => {
        plusSlides(- 1);
    });

     next.addEventListener('click',() => {
        plusSlides(1);
     });
     */
//Calculator
//const result = document.querySelector('.calculating__result span');
/* let sex = female,
        height,
        weight,
        age,
        ratio = 1.375; */
/*  let sex, height, weight, age, ratio;
    
    if (localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex');
    } else {
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }

     if (localStorage.getItem('ratio')) {
        ratio = localStorage.getItem('ratio');
    } else {
        ratio = 1.375;
        localStorage.setItem('ratio', 1.375);
    }

    function initLocalSetings(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.classList.remove(activeClass);
            if (elem.getAttribute('id') === localStorage.getItem('sex')) {
                elem.classList.add(activeClass);
            }
            if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                elem.classList.add(activeClass);
            }
        });
    }

    initLocalSetings('#gender div', 'calculating__choose-item_active');
    initLocalSetings('.calculating__choose_big div', 'calculating__choose-item_active');

    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = '____';
            return;

        }
        
        if (sex === 'female') {
                result.textContent = Math.round(( 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age))* ratio);
            } else {
                result.textContent =Math.round ((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
            }
    }

    calcTotal();

    function getStaticInformation(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', e.target.getAttribute('id'));
                }

                //console.log(ratio, sex);

                elements.forEach(elem => {
                    elem.classList.remove(activeClass);
                });

                e.target.classList.add(activeClass);

                calcTotal();
            });
        });

        
    }

    getStaticInformation('#gender div', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

    function getDynamicInformation(selector) {
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {

            if (input.value.match(/\D/g)) {
                input.style.border = '1px solid red';
            } else {
                input.style.border = 'none';
            }


            switch (input.getAttribute('id')) {
                case 'height':
                    height = + input.value;
                    break;
                case 'weight':
                    weight = +input.value;
                    break;
                case 'age':
                    age = +input.value;
                    break;
                
            }

             calcTotal();
        });

       
    }

    getDynamicInformation('#height');
    getDynamicInformation('#weight');
     getDynamicInformation('#age'); */
