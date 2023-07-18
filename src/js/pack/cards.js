import { getResource } from "../services/srvices";

function cards() {
  // Используем классы для карточек

  class MenuCard {
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
      const element = document.createElement("div");
      if (this.classes.length === 0) {
        this.element = "menu2__item";
        element.classList.add(this.element);
      } else {
        this.classes.forEach((className) => element.classList.add(className));
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

  /*   const getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  }; */

  getResource("http://localhost:3000/menu").then((data) => {
    data.forEach(({ img, altimg, title, descr, price }) => {
      new MenuCard(
        img,
        altimg,
        title,
        descr,
        price,
        ".menu2__field .container"
      ).render();
    });
  });

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
}

export default cards;
