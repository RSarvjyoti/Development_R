let container = document.getElementById("container");
let flag = false;


async function fetchApiData( page = 1) {
    try{
        let res = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=20`);
        let data = await res.json();
        console.log(data);
        appendData(data);
        flag = true;
    }catch(err) {
        console.log(err);
    }
}


function createCart(data) {
    let card = document.createElement("div");
    let img = document.createElement("img");
    let h4 = document.createElement("p");

    card.className = "card";
    img.src = data.thumbnailUrl;
    h4.innerText = data.title;

    card.append(img, h4);
    return card;
}


function appendData(data) {
    container.innerHTML = "";

    data.forEach((item)=> {
        let cards = createCart(item);
        container.append(cards);
    })
}
let page = 1;
fetchApiData();

// console.log(container.offsetHeight);
// console.log("clientHeight",container.clientHeight);
// console.log("scrollHeight",container.scrollHeight);
// let clientHeight = document.documentElement.clientHeight;
// let scrollHeight = document.documentElement.scrollHeight;
// let scrollTop = document.documentElement.scrollTop;

window.addEventListener("scroll", ()=> {
    let clientHeight = document.documentElement.clientHeight;
    let scrollHeight = document.documentElement.scrollHeight;
    let scrollTop = document.documentElement.scrollTop;

    if (scrollHeight - clientHeight <= Math.ceil(scrollTop) && flag) {
        console.log("we are at the bottom");
        page++;
        fetchApiData(page);
        flag = false;
    }

})