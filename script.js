document.addEventListener("DOMContentLoaded", function () {
  const productsContainer = document.getElementById("products");
  const products = JSON.parse(localStorage.getItem("products")) || [];
  products.forEach((product, index) => {
    const productCard = document.createElement("div");
    productCard.className = "bg-white shadow-md rounded p-5 mb-5 w-1/2";

    productCard.innerHTML = `
                    <h3 class="text-lg font-bold">${product.title}</h3>
                    <img src="${product.imageUrl}" alt="${product.title}" class="w-full h-48 object-cover mt-2 mb-2">
                    <p>${product.introduction}</p>
                    <p class="text-green-600 font-bold">${product.price}₮</p>
                    <button class="bg-blue-500 text-white px-3 py-1 rounded mt-3 mr-3" onclick="addToBasket(${index})">Сагслах</button>
                    <button class="bg-red-500 text-white px-3 py-1 rounded mt-3" onclick="deleteProduct(${index})">Устгах</button>
                `;
    productsContainer.appendChild(productCard);
  });
});
function addToBasket(index) {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const basket = JSON.parse(localStorage.getItem("basket")) || [];
  basket.push(products[index]);
  localStorage.setItem("basket", JSON.stringify(basket));
  alert("Сагсанд нэмэгдлээ!");
}

function deleteProduct(index) {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  products.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(products));
  window.location.reload();
}

document.getElementById("create").addEventListener("click", function () {
  const title = document.getElementById("title").value;
  const introduction = document.getElementById("intro").value;
  const price = document.getElementById("price").value;
  const imageUrl = document.getElementById("image").value;

  if (title && introduction && price && imageUrl) {
    const product = { title, introduction, price, imageUrl };
    const products = JSON.parse(localStorage.getItem("products")) || [];
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
    alert("Бүтээгдэхүүн нэмэгдлээ!");
    window.location.href = "index.html";
  } else {
    alert("Бүх талбарыг бөглөнө үү!");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const basketContainer = document.getElementById("basket");
  const basket = JSON.parse(localStorage.getItem("basket")) || [];
  basket.forEach((product, index) => {
    const basketCard = document.createElement("div");
    basketCard.className = "bg-white shadow-md rounded p-5 mb-5 w-1/2";

    basketCard.innerHTML = `
                    <h3 class="text-lg font-bold">${product.title}</h3>
                    <img src="${product.imageUrl}" alt="${product.title}" class="w-full h-48 object-cover mt-2 mb-2">
                    <p>${product.introduction}</p>
                    <p class="text-green-600 font-bold">${product.price}₮</p>
                    <button class="bg-red-500 text-white px-3 py-1 rounded mt-3" onclick="deleteFromBasket(${index})">Устгах</button>
                `;
    basketContainer.appendChild(basketCard);
  });
});

function deleteFromBasket(index) {
  const basket = JSON.parse(localStorage.getItem("basket")) || [];
  basket.splice(index, 1);
  localStorage.setItem("basket", JSON.stringify(basket));
  window.location.reload();
}
