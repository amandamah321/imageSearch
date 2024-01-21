
const acessKey = "K_sWmoDXtFBtSQIIaAlOTy_BjE8E76Onr_jxM-d8LeQ";

const formEl = document.querySelector("#form_js");
const inputEl = document.getElementById("search__input");
const searchResultsEl = document.querySelector(".search__results");
const btn__moreEl = document.getElementById("btn__more");
const search__buttonEl = document.getElementById("search__button");

let keyWord = "";
let page = 1;

async function searchImage() {
    keyWord = inputEl.value;  
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${acessKey}`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    if (page === 1) {
        searchResultsEl.innerHTML = "";
    }

    results.map((result) => {
        const divImage = document.createElement("div");
        divImage.classList.add("search__result")
        divImage.innerHTML = `<img src="${result.urls.small}" alt="galaxy image">
        <a href="${result.links.html}" target="_blank">${result.alt_description}</a>`;

        searchResultsEl.appendChild(divImage);
    })

    page++;
    if(page > 1){
        btn__moreEl.style.display = "block";
        btn__moreEl.style.margin = "2rem auto";
    } 

}

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImage()
})

search__buttonEl.addEventListener('click', (e) => {
    searchImage();
})

btn__moreEl.addEventListener("click", () => {
    page++;
    searchImage();
})
