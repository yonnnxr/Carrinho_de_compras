//criar item com subtotal certo
async function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subtotal: calcularSubtotal(price, quantity)
    }
}
function calcularSubtotal(price, quantity) {
    return price * quantity;
}

export default createItem;