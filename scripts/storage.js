let products = [];

class CardStorage{
    constructor(){}
    getProducts(){

        let productsLocalStorage = localStorage.getItem('cardStorage');
        if(productsLocalStorage != null){
            products = JSON.parse(productsLocalStorage);

        }
        return products;
    }

    putProducts(id){
        let products = this.getProducts();
        let index = products.indexOf(id);
        let productsPush;
        if (index === -1){
            products.push(id);
            productsPush = true;
        }
        else{
            products.splice(index, 1);
            productsPush = false;
        }
        localStorage.setItem('cardStorage', JSON.stringify(products));

        return{
            productsPush: productsPush,
            products: products
        }
    }
}

let cardStorage = new CardStorage();