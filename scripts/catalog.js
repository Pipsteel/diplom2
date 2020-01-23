let wrap = document.querySelector('.items');

class AllProducts{
    constructor(containerProducts, containerCounter, catalogProduct){
        this.container = document.querySelector(containerProducts);
        this.containerCounter = document.querySelector(containerCounter);
        this.catalogProduct = catalogProduct;
        this.createCatalog();
        this.counter();

    }

        counter(){
            let products = cardStorage.getProducts();
            this.containerCounter.innerHTML = products.length;

            let local2 = JSON.parse(localStorage.getItem('cardStorage'));
            console.log(local2.length);
        }


    createCatalog(){
        let wrapper = document.createElement('slot');
        let products = cardStorage.getProducts();
        if(wrap !== null) {

            for (let i = 0; i < this.catalogProduct.length; i++) {
                let index = products.indexOf(this.catalogProduct[i].id);
                let activeClass;
                let acttiveText;
                if (index === -1) {
                    activeClass = '';
                    acttiveText = 'Добавить в корзину <i class="fas fa-shopping-basket">'
                }
                else {
                    activeClass = 'conteiner';
                    acttiveText = 'Добавить в корзину <i class="fas fa-shopping-basket">'
                }
                let item = this.getCatalogItem({
                    tagName: 'div',
                    className: 'item'
                });
                let img = this.getCatalogItem({
                    tagName: 'div',
                    className: 'img',
                    backgroundImage: `url('${this.catalogProduct[i].img}')`
                });
                let name = this.getCatalogItem({
                    tagName: 'div',
                    className: 'name',
                    textName: this.catalogProduct[i].description
                });
                let price = this.getCatalogItem({
                    tagName: 'div',
                    className: 'price',
                    textName: ` ${this.catalogProduct[i].price} RUB`
                });
                let btn = this.getCatalogItem({
                    tagName: 'button',
                    className: 'btn',
                    textName: acttiveText,
                    id: this.catalogProduct[i].id
                });
                btn.addEventListener('click', function () {
                    let id = this.getAttribute('data-id');
                    let result = cardStorage.putProducts(id);
                    if (result.productsPush) {
                        this.innerHTML = 'Удалить из корзины';
                    }
                    else {
                        this.innerHTML = 'Добавить в корзину <i class="fas fa-shopping-basket">';
                    }
                    let conteinercounter = document.querySelector('.conteiner-counter');

                    let local2 = JSON.parse(localStorage.getItem('cardStorage'));
                    console.log(local2.length);
                    conteinercounter.innerHTML = local2.length;

                    /// card schetchik allProducts.createCatalog();
                });
                item.appendChild(img);
                item.appendChild(price);
                item.appendChild(name);
                item.appendChild(btn);
                wrapper.appendChild(item);
            }


            this.container.appendChild(wrapper);
        }
    }

    getCatalogItem(card){
        let elem = document.createElement(card.tagName);
        if('className' in card){
            elem.setAttribute('class', card.className);
        };
        if('textName' in card){
            elem.innerHTML = card.textName;
        };
        if('backgroundImage' in card){
            elem.style.backgroundImage = card.backgroundImage;
        };
        if('id' in card ){
            elem.setAttribute('data-id', card.id )
        }
        return elem;
    }

}


    let allProducts = new AllProducts('.container-products', '.conteiner-counter', catalogProduct);
