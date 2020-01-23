let corzinaInner = document.getElementById('corzInner');
let resultInner = document.getElementById('resultInner');
let cart = [];
let sum = 0;
//---------------------------------------------------
console.log(localStorage.getItem('cardStorage'));
let local = JSON.parse(localStorage.getItem('cardStorage')) ;
console.log(local, local.length);
/*----------------------------достали список из класса и преобразовали в массив----------------*/
function setArray() {
    corzinaInner.innerHTML = ""
    // for (let i in catalogProduct){
    //     console.log(catalogProduct[i]);
    //
    // }

    catalogProduct.map(function (item, index) {
        /*каталог продукт подтягивает из скрипта выше*/
        // return i;
        for( let i in local){

            if(item.id === local[i] ){
                sum += item.price;
                corzinaInner.innerHTML += `<div class="allCards"><img src="${item.img}" alt="" class="cardImg">
                                            <div class="cardDescription"><h2>Товар: ${item.description}</h2></div>
                                            <div class="cardPrice" ><H2>Цена: ${item.price} </H2></div>
                                            <div><button class="delBtn" id="${item.id}" onclick="deleteCart(this)">Delete</button></div></div> `
            }
        }

    })
    /*catalog Product*/
    console.log(sum);
    resultInner.innerHTML = `<div><h2>общая цена: ${sum}</h2></div>`
}
setArray();

/*функция удаления снизу*/

function deleteCart(e) {
    console.log('id=',e.getAttribute("id"));
    let delId = e.getAttribute("id");
    sum = 0;
    for (let i in local){
        if( local[i] === delId){
            local.splice(i, 1);
            localStorage.setItem('cardStorage', JSON.stringify(local));
            console.log(local);
        }
    }
    setArray();
    allProducts.counter();
}

allProducts.counter();