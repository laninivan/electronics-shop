class ProductsCards {

    discountPriceHTMLCreate(price, discount) {
        if (!discount)
            return `
        <div class="card__price">
                ${price} ₽
         </div>
        `

        return `
        <div class="card__price">
            ${(+price * (1 - discount)).toFixed()} ₽
                <div class='card__old-price'>
                ${price} ₽
                </div>
        </div>
        `
    }

    getDayInfo(strDate) {

        const dayNames = [
            'Воскресенье',
            'Понедельник',
            'Вторник',
            'Среда',
            'Четверг',
            'Пятница',
            'Суббота',
        ]

        const monthNames = [
            'Декабря',
            'Января',
            'Февраля',
            'Марта',
            'Апреля',
            'Мая',
            'Июня',
            'Июля',
            'Августа',
            'Сентября',
            'Октября',
            'Ноября',
        ]
        const date = new Date(strDate);


        return `${dayNames[date.getDay()]}, ${Math.ceil(date.getDate() / 7)} неделя ${monthNames[date.getMonth()]} ${date.getFullYear()} года`;
    }

    blockGenerate(blockId, blockTitle) {
        const menyItem= `
            <li class="menu__item">
                <a href="#${blockId}">${blockTitle}</a>
             </li>
        `;
        const textHtml = `
        <div class="cards-block" id=${blockId}>
                <div class="cards-block__title">
                    ${blockTitle}
                </div>
                <div class="cards-block__content">
                </div>
            </div>
        `
        NODE_CARDS.insertAdjacentHTML('beforeend', textHtml);
        NODE_HEADER_MENU.insertAdjacentHTML('beforeend', menyItem);
        NODE_FOOTER_MENU.insertAdjacentHTML('beforeend', menyItem);
    }
    cardGenerate(blockId, productType) {
        let textHtml=``;

        PRODUCTS.filter(elem=>elem.type==productType).forEach((product)=> {
            let { img, title, price, date, id } = product;

            textHtml += `
            <div class="card" id="card-${id}">
                            <img class="card__img" src=${img}>
                            <div class="card__info">
                                <div class="card__name">
                                ${title}
                                </div>
                                <div class="card__price">
                                ${price} ₽
                                </div>
                                <div class="card__date">
                                ${this.getDayInfo(date)}
                                </div>
                                <button class="card__buy" onclick="buyWindow.windowGenerate(${id});">
                                    Купить
                                </button>
                            </div>
                        </div>
            `;
        })

        document.querySelector(`#${blockId} .cards-block__content`).insertAdjacentHTML('beforeend', textHtml);

    }


}

const productsCardsPage = new ProductsCards();

productsCardsPage.blockGenerate('block1', 'Микрофоны');
productsCardsPage.cardGenerate('block1', 'microphone');

productsCardsPage.blockGenerate('block2', 'Телефоны');
productsCardsPage.cardGenerate('block2', 'phone');

productsCardsPage.blockGenerate('block3', 'Ноутбуки');
productsCardsPage.cardGenerate('block3', 'laptop');

productsCardsPage.blockGenerate('block4', 'Наушники');
productsCardsPage.cardGenerate('block4', 'headphone');

