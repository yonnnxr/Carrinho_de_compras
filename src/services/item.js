// Função utilitária para calcular subtotal de um item
function calcularSubtotal(price, quantity) {
  return price * quantity;
}

// Criar item garantindo o campo subtotal
async function createItem(name, price, quantity = 1) {
  return {
    name,
    price,
    quantity,
    subtotal: calcularSubtotal(price, quantity)
  };
}

export { createItem, calcularSubtotal };