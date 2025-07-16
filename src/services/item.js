//criar item com subtotal certo
async function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subtotal: calcularSubtotal(price, quantity)
    }
}
export default createItem;