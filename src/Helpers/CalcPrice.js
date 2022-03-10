// funkciya 28
export function calcSubPrice(product){
    console.log(product, +product.count , +product.item.price, 'calcSub')
    return product.count * product.item.price
}

//funkciya 29 - prinimaet massiv iz vseh tovarov, kotorye popadayut v korzinu, nujna dlya podscheta vsei summy v korzine
export function calcTotalPrice(products) {
    let totalPrice = 0;
    products.forEach(elem => {
        totalPrice += elem.SubPrice
    })
    return totalPrice
}

// funkciya 30 dlya scheta kolichestva produktov v korzine
export function getCountProductsInCart () {
    let cart = JSON.parse(localStorage.getItem('cart'))
    return cart ? cart.products.length : 0
}