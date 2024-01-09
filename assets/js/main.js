
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
getAPI(apiAllProduct)

const reset = () => {
    document.querySelector("#shopItems").innerHTML = ""

}


let electronicsDOM = document.querySelector("#electronics");
electronicsDOM.addEventListener("click", function () {
    reset()
    getAPI(apiElectronics)
})

let JeweleryDOM = document.querySelector("#jewelery");
JeweleryDOM.addEventListener("click", function () {

    getAPI(apiJewelery)
})
let menDOM = document.querySelector("#men");
menDOM.addEventListener("click", function () {
    getAPI(apiMen)
})

let wommenDOM = document.querySelector("#wommen");
wommenDOM.addEventListener("click", function () {
    getAPI(apiWommen)
})




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
        pAddToCard.textContent = "Add to card id: " + product.id
        pCard.appendChild(pAddToCard)

        //adauga in doom divul creat pentru produs
        document.querySelector("#shopItems").appendChild(pCard)
    })

}


