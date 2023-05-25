class BuyWindow {


    buyWindowRemove() {
        document.querySelector('.buy-window').remove();
    }

    windowGenerate(id) {
        const product=PRODUCTS.find(el=>el.id==id);

        let textHtml = `
        <div class="buy-window" id="product-${id}">
        <div class="buy-window__bg">
            <form class="buy-window__form" action="" method="get">
    
            <div class="buy-window__inputs">
            <p class="buy-window__count">
                <label class="buy-window__count-label" for="count" >Количество</label>
                <p><input class="buy-window__count-input" type="number" min=1 name="count" id="count" number required></p>         
            </p>

            <p class="buy-window__color">
                <label class="buy-window__color-label" for="color">Цвет</label>
                <p><input class="buy-window__color-radio" type="radio" name="browser" value="Белый" id="color" checked>Белый</p>
                <p><input class="buy-window__color-radio" type="radio" name="browser" value="Черный" id="color">Черный</p>
                <p> <input class="buy-window__color-radio" type="radio" name="browser" value="Синий" id="color">Синий</p>
                <p><input class="buy-window__color-radio" type="radio" name="browser" value="Красный" id="color">Красный</p>   
            </p>
            <p class="buy-window__description">
                <label class="buy-window__description-label" for="description">Комментарий</label>
                <textarea class="buy-window__description-input"  id="description" name="description" rows="4" cols="25" maxlength="2000"></textarea>
            </p>
        </div>

        <div class="buy-window__buttons">
            <button class="buy-window__exit-button" type="button" onclick="buyWindow.buyWindowRemove()"></button>
            <button class="buy-window__buy-button" type="submit">Купить</button>
        </div>     
            </form>
        </div>
    </div>
        `;

        NODE_BODY.insertAdjacentHTML('beforeend', textHtml);

        const curWindowBuy = document.querySelector('.buy-window');
        const curWindowCount = document.querySelector('.buy-window__count-input');

        curWindowBuy.addEventListener("submit", (e) => {
            const curWindowColor = document.querySelector('.buy-window__color-radio:checked');
            e.preventDefault();
            if (curWindowColor == null) {
                return;
            }

            buyWindow.buyWindowRemove();
            alert(`Совершена порупка. Товар - ${product.title} . Количество - ${curWindowCount.value}. Цвет - ${curWindowColor.value}.`);
        })
    }


}

const buyWindow = new BuyWindow();

