function creareTableRow(products, index) {
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let td5 = document.createElement("td");
  let span = document.createElement("span");

  let img = document.createElement("img");

  let plus = document.createElement("button");
  let minus = document.createElement("button");

  plus.style.cursor = "pointer";
  minus.style.cursor = "pointer";

  plus.innerText = "+";
  minus.innerText = "-";

  // Display initial quantity
  span.innerText = products.quntity;

  // Disable the minus button initially if quantity is 1
  if (products.quntity === 1) {
    minus.disabled = true;
  }

  // Increase quantity
  plus.addEventListener("click", (e) => {
    products.quntity++;
    
    // Update localStorage
    let productData = JSON.parse(localStorage.getItem("products")) || [];
    productData[index] = products;
    localStorage.setItem("products", JSON.stringify(productData));

    // Update the displayed quantity
    span.innerText = products.quntity;

    // Re-enable the minus button if quantity is greater than 1
    if (products.quntity > 1) {
      minus.disabled = false;
    }
  });

  // Decrease quantity
  minus.addEventListener("click", (e) => {
    if (products.quntity > 1) {
      products.quntity--;

      // Update localStorage
      let productData = JSON.parse(localStorage.getItem("products")) || [];
      productData[index] = products;
      localStorage.setItem("products", JSON.stringify(productData));

      // Update the displayed quantity
      span.innerText = products.quntity;

      // Disable the minus button if quantity is 1
      if (products.quntity === 1) {
        minus.disabled = true;
      }
    }
  });

  // Append elements to the row
  td2.append(img);
  td1.innerText = products.name;
  img.src = products.image;
  td3.innerText = products.category;
  td5.innerText = products.price;

  td4.append(plus, span, minus);
  tr.append(td1, td2, td3, td4, td5);

  return tr;
}


let submitbtn = document.getElementById("submitbtn");
let productName = document.getElementById("productName");
let image = document.getElementById("image");
let category = document.getElementById("category");
let quntity = document.getElementById("quntity");
let price = document.getElementById("price");
let tbody = document.querySelector("tbody");

submitbtn.addEventListener("click", (e) => {
  e.preventDefault();

  const product = {
    name: productName.value,
    image: image.value,
    category: category.value,
    quntity: quntity.value,
    price: price.value,
  };

  console.log(product);

  let products = JSON.parse(localStorage.getItem("products")) || [];

  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));

  let tr = creareTableRow(product);
  tbody.append(tr);
});

let appendDataFromLocalStorage = (data) => {
  tbody.innerHtml = "";

  data.forEach((item, index) => {
    let card = creareTableRow(item, index);
    tbody.append(card);
  });
};

let productData = JSON.parse(localStorage.getItem("products"));
appendDataFromLocalStorage(productData);
