"use strict";

let cart = [];
const table = document.getElementById("table");
let totalPrice = 0;

function addItem(ware, price, quantity) {
  let item = cart.find((item) => item.name === ware);
  if (item) {
    item.price = price;
    item.quantity += quantity;
    let addTotal = item.price * quantity;
    totalPrice += addTotal;
    addToVisibleCart(cart);
  } else {
    let newItem = {
      name: ware,
      price: price,
      quantity: quantity,
    };
    totalPrice += newItem.price * newItem.quantity;
    cart.push(newItem);
    addToVisibleCart(cart);
  }
}

function addToVisibleCart(items) {
  while (table.firstChild) {
    table.removeChild(table.lastChild);
  }
  for (const obj of items) {
    const row = document.createElement("tr");
    for (const val of Object.values(obj)) {
      const col = document.createElement("td");
      col.textContent = val;
      row.appendChild(col);
    }
    table.appendChild(row);
  }
}

function removeItem(items, item) {
  if (items.includes(items.name.item)) {
    items.pop(item);
  }
}

function calculateTotal() {
  console.log(totalPrice);
}

function checkDiscount() {}

// Adding Items
document.getElementById("add").addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("ware").value;
  let price = Number(document.getElementById("price").value);
  let qty = Number(document.getElementById("quantity").value);

  // const table = document.getElementById("table");

  addItem(name, price, qty);

  console.log(cart);
});

// Removing Items
document.getElementById("remove").addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("delete").value;

  removeItem(cart, name);
  console.log(cart);
});

document.getElementById("calculate").addEventListener("submit", (e) => {
  e.preventDefault();

  calculateTotal();
});
