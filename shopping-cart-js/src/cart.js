let label = document.querySelector("#label");
let shoppingCart = document.querySelector("#shopping-cart");
let basket = JSON.parse(localStorage.getItem("basket")) || [];

const sumQuantity = () => {
  const cartIcon = document.querySelector("#cart-amount");
  const totalAmount = basket
    .map((item) => {
      return item.quantity;
    })
    .reduce((prev, curr) => prev + curr, 0);
  cartIcon.innerHTML = totalAmount;
};

sumQuantity();

let generateCartItems = () => {
  if (basket.length) {
    return (shoppingCart.innerHTML = basket
      .map((item) => {
        let { pk, quantity } = item;
        let searchedItem = shopItemsData.find((x) => x.pk === pk) || [];
        let { image, name, price } = searchedItem;
        return `
      <div class="cart-item">
        <img width = "100" src=${image}></img>
        <div class="details">

          <div class="title-price-x">
            <h4 class="title-price">
              <p>${name}</p>
              <p class="cart-item-price">$ ${price}</p>
            </h4>
            <i class="bi bi-x-lg" onclick="removeItem(${pk})"></i>
          </div>

          <div class="buttons">
              <i onclick="decrement(${pk})" class="bi bi-dash-lg"></i>
              <div id=${pk} class="quantity">${quantity}</div>
              <i onclick="increment(${pk})" class="bi bi-plus-lg"></i>
          </div>
          
          <h3>
            $ ${quantity * searchedItem.price}
          </h3>
        </div>
      </div> 
      `;
      })
      .join(" "));
  } else {
    shoppingCart.innerHTML = ``;
    label.innerHTML = `
    <h2>Cart is empty</h2>
    <a href="index.html"><button class = "home-button">Back to home</button></a>
    `;
  }
};

generateCartItems();

const increment = (object) => {
  let selectedItem = object;
  let searchedItem = basket.find(
    (itemInBasket) => itemInBasket.pk === selectedItem.id
  );
  if (!searchedItem) {
    basket.push({
      pk: selectedItem.id,
      quantity: 1,
    });
  } else {
    searchedItem.quantity += 1;
  }
  generateCartItems();
  update(selectedItem);
  localStorage.setItem("basket", JSON.stringify(basket));
};

const decrement = (object) => {
  let selectedItem = object;
  let searchedItem = basket.find(
    (itemInBasket) => itemInBasket.pk === selectedItem.id
  );
  if (!searchedItem) return;
  if (searchedItem.quantity === 0) return;
  searchedItem.quantity -= 1;
  update(selectedItem);
  basket = basket.filter((x) => x.quantity !== 0);
  generateCartItems();
  localStorage.setItem("basket", JSON.stringify(basket));
};

const update = (object) => {
  let selectedItem = object;
  let searchedItem = basket.find(
    (itemInBasket) => itemInBasket.pk === selectedItem.id
  );
  selectedItem.innerHTML = searchedItem.quantity;
  sumQuantity();
  totalAmount();
};

const removeItem = (object) => {
  let selectedItem = object;
  basket = basket.filter((x) => x.pk !== selectedItem.id);
  generateCartItems();
  totalAmount();
  sumQuantity();
  localStorage.setItem("basket", JSON.stringify(basket));
};

const clearCart = () => {
  basket = [];
  generateCartItems();
  sumQuantity();
  localStorage.setItem("basket", JSON.stringify(basket));
};

const totalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((item) => {
        let { pk, quantity } = item;
        let searchedItem = shopItemsData.find((x) => x.pk === pk) || [];
        return quantity * searchedItem.price;
      })
      .reduce((prev, curr) => prev + curr, 0);
    label.innerHTML = `
    <h2>Total Bill : $ ${amount}</h2>
    <button class="checkout">Checkout</button>
    <button class="removeAll" onclick="clearCart()">Clear Cart</button>
    `;
  } else return;
};

totalAmount();
