let items = document.querySelectorAll(".item");

items.forEach((elm, index) => {
  if (index % 2 == 0) {
    elm.style.color = "red";
  } else {
    elm.style.background = "yellow";
  }
});

const cartData = [
  { title: "iPhone", price: 50000, quantity: 1, category: "Electronics" },
  {
    title: "Samsung Galaxy",
    price: 45000,
    quantity: 2,
    category: "Electronics",
  },
  { title: "MacBook Pro", price: 150000, quantity: 1, category: "Electronics" },
  { title: "Dell XPS 13", price: 120000, quantity: 1, category: "Electronics" },
  {
    title: "Sony Headphones",
    price: 10000,
    quantity: 3,
    category: "Accessories",
  },
  {
    title: "Bluetooth Speaker",
    price: 3000,
    quantity: 2,
    category: "Accessories",
  },
  { title: "Smart Watch", price: 15000, quantity: 1, category: "Wearables" },
  {
    title: "Wireless Mouse",
    price: 1200,
    quantity: 4,
    category: "Accessories",
  },
  { title: "Office Chair", price: 8000, quantity: 1, category: "Furniture" },
  { title: "Coffee Mug", price: 300, quantity: 5, category: "Home & Kitchen" },
  { title: "Backpack", price: 2000, quantity: 2, category: "Travel & Luggage" },
  {
    title: "Digital Camera",
    price: 60000,
    quantity: 1,
    category: "Electronics",
  },
  { title: "Gaming Console", price: 40000, quantity: 1, category: "Gaming" },
  {
    title: "Electric Kettle",
    price: 1500,
    quantity: 2,
    category: "Home Appliances",
  },
  { title: "Yoga Mat", price: 800, quantity: 3, category: "Fitness" },
];

let createCard = (data) => {
  let div = document.createElement("div");
  let h2 = document.createElement("h2");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let btn = document.createElement("button");

  div.setAttribute("class", "card");
  btn.setAttribute("class", "btn");
  h2.innerText = data.title;
  p1.innerText = data.category;
  p2.innerText = data.quantity;
  p3.innerText = data.price;
  btn.innerText = "Click ME"

  btn.addEventListener("click", () => {alert("Button clicked")});

  div.append(h2,p1,p2,p3, btn);
  return div;
};


function appendCard(data) {
    let container1 = document.getElementById("container1");
    container1.innerHTML = "";
    data.forEach((elm) => {
        let cart = createCard(elm);
        container1.append(cart);
    })
}


appendCard(cartData)

// low to high

let lowTohigh = document.getElementById("lowToHigh");
let highToLow = document.getElementById("highTLow");

lowTohigh.addEventListener("click", () => {
    cartData.sort((a,b) => {return a.price - b.price});
    appendCard(cartData);
    console.log(cartData);
})


// high to low

highToLow.addEventListener("click", () => {
    cartData.sort((a,b) => {return b.price - a.price});
    appendCard(cartData);
    console.log(cartData);
})


// 

let toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {
  let body = document.getElementsByTagName("body")[0];
  
  // if (body.style.background === "black") {
  //   body.style.background = "white";
  //   body.style.color = "black";
  // } else {
  //   body.style.background = "black";
  //   body.style.color = "white";
  // }

  let currentBackground = window.getComputedStyle(body).backgroundColor;

  // Use RGB value for reliable comparison
  if (currentBackground === "rgb(0, 153, 153)") {  
    body.style.background = "#ffffff"; 
    body.style.color = "black";         
  } else {
    body.style.background = "#009999";  
    body.style.color = "white";         
  }

})