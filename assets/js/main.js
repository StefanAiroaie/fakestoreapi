
// api gespeichert
const apiAllProduct = 'https://fakestoreapi.com/products';
const apiCategories = 'https://fakestoreapi.com/products/categories'
const apiJewelery = 'https://fakestoreapi.com/products/category/jewelery'
const apiElectronics = 'https://fakestoreapi.com/products/category/electronics'
const apiMen = `https://fakestoreapi.com/products/category/men's%20clothing`
const apiWommen = `https://fakestoreapi.com/products/category/women's%20clothing`


// get api function
const getAPI = (apiLink) => {
    fetch(apiLink)
        .then(res => res.json())
        .then(data => {
            showProduct(data)
        })
        .catch(error => console.log(error))
}

//first api with all products
getAPI(apiAllProduct)


// reset DOM function
const reset = () => {
    document.querySelector("#shopItems").innerHTML = ""
}


// the butoons functions (filter by catergory)
let electronicsDOM = document.querySelector("#electronics");
electronicsDOM.addEventListener("click", function () {
    reset()
    getAPI(apiElectronics)
})

let JeweleryDOM = document.querySelector("#jewelery");
JeweleryDOM.addEventListener("click", function () {
    reset()
    getAPI(apiJewelery)
})
let menDOM = document.querySelector("#men");
menDOM.addEventListener("click", function () {
    reset()
    getAPI(apiMen)
})

let wommenDOM = document.querySelector("#wommen");
wommenDOM.addEventListener("click", function () {
    reset()
    getAPI(apiWommen)
})

// sort price up
let up = document.querySelector("#priceUp");
up.addEventListener("click", function () {
    reset()
    fetch(apiAllProduct)
        .then(res => res.json())
        .then(data => {
            let priceSortedUp = [...data]
            priceSortedUp.sort((a, b) => a.price - b.price);
            showProduct(priceSortedUp)
        })
        .catch(error => console.log(error))
})

// sort price down
let down = document.querySelector("#priceDown");
down.addEventListener("click", function () {
    reset()
    fetch(apiAllProduct)
        .then(res => res.json())
        .then(data => {
            let priceSortedUp = [...data]
            priceSortedUp.sort((a, b) => b.price - a.price);
            showProduct(priceSortedUp)
        })
        .catch(error => console.log(error))
})





/*
let yearUp = document.querySelector("#yearUp");
yearUp.addEventListener("click", function () {

    let sortedYearUp = moviesCopy.sort((a, b) => a[1] - b[1]);

    getAPI(apiAllProduct)
    outputDom.innerHTML = "";
    sortedYearUp.forEach(showMovies);
});
*/



// searc filed aber funktiniert nicht
const searchInput = document.querySelector("#searchInput")

let searchField = []
console.log(searchField);
searchInput.addEventListener("input", (e) => {
    const value = e.target.value
    searchField.forEach(prod => {
        const isVisible = product.title.includes(value)
        product.element.classList.toggle("hide", !isVisible)
    })

    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
            searchField = data.map(product => {
                console.log(data);
                return { name: product.title }
            })

        })
        .catch(error => console.log(error))
    console.log(e);

})


/*

function searchFunc() {
    reset()
    let searchInput = document.querySelector('#search').value.toLowerCase()
    console.log("test" + searchInput);


    let filter = getAPI(apiAllProduct).filter((parameter) => {
        return parameter[0].toLowerCase().includes(searchInput) || parameter[1].includes(searchInput)
    })
    showMovies(filter)
    filter.length !== 0 ? filter.forEach(showMovies) : outputDom.innerHTML = `<div class='cards'><h3>Sorry the Movie ist not available<h3></div>`
}

*/
// getAPI(apiJewelery)
// getAPI(apiAllProduct)

// let pPriceUp = document.querySelector("#priceUp");
// pPriceUp.addEventListener("click", function () {
//     getAPI(apiJewelery)
//     let sortedPriceUp = data.sort((a, b) => a[1] - b[1]);
//     // outputDom.innerHTML = "";
//     // sortedPriceUp.forEach(showProduct);
//     console.log(sortedPriceUp);
// });




// show products function
const showProduct = (singleProduct) => {
    const singleProductCopy = [...singleProduct]

    singleProductCopy.forEach(showDataFeed = (product) => {

        // am creat un nou div in care vor intra produsele
        const pCard = document.createElement("div")
        pCard.id = "ithemCard";

        const pImg = document.createElement("img")
        pImg.setAttribute("src", product.image)
        pCard.appendChild(pImg)

        // am creat un h4 ca si titlu
        const pTitleInDom = document.createElement("h4")
        pTitleInDom.textContent = product.title
        pCard.appendChild(pTitleInDom)

        // am creat un pret ca si titlu
        const pPriceInDom = document.createElement("p")
        pPriceInDom.textContent = product.price + " €"
        pCard.appendChild(pPriceInDom)

        const pAddToCard = document.createElement("button")
        pAddToCard.textContent = "Add to card"
        pCard.appendChild(pAddToCard)

        //adauga in doom divul creat pentru produs
        document.querySelector("#shopItems").appendChild(pCard)
    })

}


