let container = document.querySelector(".container");
let fetchData = document.getElementById("fetchData");
let assending = document.getElementById("assending");
let dissending = document.getElementById("dissending");
let postData = document.getElementById("addData");
let updatePatch = document.getElementById("updatePatch");
let updatePut = document.getElementById("updatePut");
let deletebtn = document.getElementById("delete");

let userInput = document.getElementById("input");
let filterbtn = document.getElementById("filter");
let searchUser = document.getElementById("searchUser");
let searchBtn = document.getElementById("searchData");

fetchData.addEventListener("click", ()=> {
    fetchDataFromApi("https://jsonplaceholder.typicode.com/posts");
});
postData.addEventListener("click", addData);
updatePatch.addEventListener("click", updateDataUsingPatch);
updatePut.addEventListener("click", updateDataUsingPut);
deletebtn.addEventListener("click", deleteData);

assending.addEventListener("click", ()=> {
    fetchDataFromApi('https://jsonplaceholder.typicode.com/posts?_sort=title&_order=asc');
});
dissending.addEventListener("click", ()=> {
    fetchDataFromApi("https://jsonplaceholder.typicode.com/posts?_sort=title&_order=desc")
});

// filter
filterbtn.addEventListener("click", ()=> {
    fetchDataFromApi(`https://jsonplaceholder.typicode.com/posts?userId=${userInput.value}`);
})

//  Search

searchBtn.addEventListener("click", () => {
    let query = searchUser.value;
    console.log(fetchDataFromApi(`https://jsonplaceholder.typicode.com/posts?q=${query}`));
})

// fetch data to api

async function fetchDataFromApi(url) {
  try {
    let res = await fetch(url);
    let val = await res.json();
    console.log(val);
    appendData(val);
  } catch (err) {
    console.log(err);
  }
}

// create card
function createCart(data) {
  let div = document.createElement("div");
  let h2 = document.createElement("h2");
  let h3 = document.createElement("h3");
  let p = document.createElement("p");

  h2.innerText = `UserId : ${data.userId}`;
  h3.innerText = data.title;
  p.innerText = data.body;

  div.className = "card";
  div.append(h2,h3, p);
  return div;
}

//  append the cart
function appendData(data) {
  container.innerHTML = "";

  data.forEach((item) => {
    let cart = createCart(item);
    container.append(cart);
  });
}

// post data
async function addData() {
  let post = {
    body: "my body",
    title: "my title",
  };

  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(post),
    });

    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}


// update the data usong patch method
async function updateDataUsingPatch() {
  let post = {
    body: "Edited body",
  };
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts/6", {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(post),
    });

    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}


// update the data usong put method
async function updateDataUsingPut() {
  let post = {
    body: "Edited body using put",
    title:"Edited title using put",
  };
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(post),
    });

    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

// Delete the data 
async function deleteData() {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/posts/2", {
        method: "DELETE",
      });
  
      let data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }


//   filter data by user id

