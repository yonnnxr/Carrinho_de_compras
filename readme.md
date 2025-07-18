# Carrinho de Compras (Node.js CLI)

Sistema simples de **carrinho de compras** executado em linha de comando, inspirado em marketplaces como Shopee ou Amazon. O objetivo é demonstrar boas práticas de organização de código, separação de responsabilidades e interação com o usuário em ambiente de console.

---

## ✨ Funcionalidades

1. **Listar itens disponíveis** – Exibe os produtos que podem ser adicionados ao carrinho.
2. **Adicionar item ao carrinho** – Permite escolher um produto e a quantidade desejada.
3. **Remover item do carrinho** – Exclui todas as unidades de um item selecionado.
4. **Remover apenas uma unidade** – Decrementa a quantidade de um item específico.
5. **Visualizar carrinho** – Mostra todos os itens adicionados, suas quantidades, subtotais e o total geral.
6. **Persistência em memória** – Os dados existem apenas durante a execução; ideais para demonstração e testes rápidos.

---

## 📂 Estrutura de Pastas

```text
Carrinho_de_compras/
├── src/
│   ├── data/
│   │   └── items.js          # Mock de itens disponíveis
│   ├── services/
│   │   ├── cart.js           # Regras de negócio do carrinho
│   │   └── item.js           # Utilidades para itens (subtotal etc.)
│   └── index.js              # Ponto de entrada (CLI)
├── package.json              # Dependências e scripts
└── readme.md                 # Este arquivo
```

---

## 🚀 Instalação

Requisitos: **Node.js >= 18**

```bash
# clone o repositório
$ git clone https://github.com/<seu-usuario>/Carrinho_de_compras.git
$ cd Carrinho_de_compras

# instale as dependências
$ npm install
```

---

## 🖥️ Executando

```bash
# modo interativo
$ node src/index.js
```

Você verá um menu como este:

```
===== Menu Carrinho =====
1 - Ver itens disponíveis
2 - Adicionar item ao carrinho
3 - Remover item do carrinho (todas as unidades)
4 - Remover apenas 1 unidade de um item
5 - Ver carrinho
6 - Finalizar (sair)
```

Basta digitar o número da opção desejada e seguir as instruções exibidas.

---

## 🧪 Testes (sugestão)
Ainda não há testes automatizados, mas recomendamos utilizar **Jest**:

```bash
npm install --save-dev jest
```

Então crie testes em `__tests__/*.test.js` para cada função em `services/`.

---
