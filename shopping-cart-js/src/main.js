let shop = document.querySelector("#shop");

let basket = JSON.parse(localStorage.getItem("basket")) || [];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((item) => {
      let { pk, name, price, description, image } = item;
      let searchedItem =
        basket.find((itemInBasket) => itemInBasket.pk === pk) || [];
      return `<div id=product-id-${pk} class="item" >
        <img width="220" src=${image} />
        <div class="details">
          <h3>${name}</h3>
          <p>${description}</p>
          <div class="price-quantity">
            <h2>$ ${price}</h2>
            <div class="buttons">
              <i onclick="decrement(${pk})" class="bi bi-dash-lg"></i>
              <div id=${pk} class="quantity">${
        searchedItem.length === 0 ? 0 : searchedItem.quantity
      }
              </div>
              <i onclick="increment(${pk})" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
      </div>`;
    })
    .join(" "));
};

generateShop();

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
  localStorage.setItem("basket", JSON.stringify(basket));
};

const update = (object) => {
  let selectedItem = object;
  let searchedItem = basket.find(
    (itemInBasket) => itemInBasket.pk === selectedItem.id
  );
  selectedItem.innerHTML = searchedItem.quantity;
  sumQuantity();
};

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
