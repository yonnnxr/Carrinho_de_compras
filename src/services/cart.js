import readlineSync from 'readline-sync';

// Corrige e generaliza a função para adicionar items ao carrinho, somando quantidades se o item já existe
async function addItemToCart(cart, item, quantity = 1) {
    const existingIndex = cart.findIndex((i) => i.name === item.name);
    if (existingIndex !== -1) {
        cart[existingIndex].quantity += quantity;
        cart[existingIndex].subtotal = cart[existingIndex].price * cart[existingIndex].quantity;
    } else {
        const newItem = {
            ...item,
            quantity,
            subtotal: item.price * quantity
        };
        cart.push(newItem);
    }
}

// Remove completamente um item do carrinho pelo índice
async function removeByIndex(cart, index) {
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
    }
}

// Remove apenas uma unidade de um item existente
async function deleteItemUnit(cart, index) {
    if (index >= 0 && index < cart.length) {
        cart[index].quantity -= 1;
        if (cart[index].quantity <= 0) {
            // Remove item se quantidade zerar
            cart.splice(index, 1);
        } else {
            cart[index].subtotal = cart[index].price * cart[index].quantity;
        }
    }
}

async function calculateTotal(cart) {
    return cart.reduce((total, item) => total + item.subtotal, 0);
}

async function displayCart(cart) {
    if (cart.length === 0) {
        console.log("\nCarrinho vazio.\n");
        return;
    }
    console.log("\nCarrinho de compras:");
    console.log("--------------------------------");
    cart.forEach((item, idx) => {
        console.log(`${idx} - ${item.name} | ${item.quantity} un. | R$ ${item.subtotal.toFixed(2)}`);
    });
    console.log("--------------------------------");
    console.log(`Total: R$ ${(await calculateTotal(cart)).toFixed(2)}`);
    console.log("--------------------------------\n");
}

// Loop de interação principal
async function interactiveCart(cart, itemsList) {
    let exit = false;
    while (!exit) {
        console.log("===== Menu Carrinho =====");
        console.log("1 - Ver itens disponíveis");
        console.log("2 - Adicionar item ao carrinho");
        console.log("3 - Remover item do carrinho (todas as unidades)");
        console.log("4 - Remover apenas 1 unidade de um item");
        console.log("5 - Ver carrinho");
        console.log("6 - Finalizar (sair)");
        const choice = readlineSync.question("Escolha uma opção: ");
        switch (choice) {
            case "1": {
                console.log("\nLista de itens disponíveis:");
                itemsList.forEach((it, idx) => console.log(`${idx} - ${it.name} | R$ ${it.price}`));
                console.log("\n");
                break;
            }
            case "2": {
                const itemIndex = parseInt(readlineSync.question("Digite o índice do item a adicionar: "));
                const quantity = parseInt(readlineSync.question("Quantidade: ")) || 1;
                if (itemIndex >= 0 && itemIndex < itemsList.length) {
                    await addItemToCart(cart, itemsList[itemIndex], quantity);
                    console.log("Item adicionado com sucesso!\n");
                } else {
                    console.log("Índice inválido.\n");
                }
                break;
            }
            case "3": {
                await displayCart(cart);
                const idx = parseInt(readlineSync.question("Digite o índice do item para remover completamente: "));
                await removeByIndex(cart, idx);
                break;
            }
            case "4": {
                await displayCart(cart);
                const idx = parseInt(readlineSync.question("Digite o índice do item para remover 1 unidade: "));
                await deleteItemUnit(cart, idx);
                break;
            }
            case "5": {
                await displayCart(cart);
                break;
            }
            case "6": {
                exit = true;
                console.log("Obrigado por utilizar o carrinho. Até mais!\n");
                break;
            }
            default:
                console.log("Opção inválida.\n");
        }
    }
}

export {
    addItemToCart,
    removeByIndex,
    deleteItemUnit,
    calculateTotal,
    displayCart,
    interactiveCart
};
