// ======= Start animation =======================//
document.addEventListener('DOMContentLoaded', () => {
    let pictures = [];
    let currentImage = 0;
    let noOfImages = 5;

    for (let i = 1; i <= noOfImages; i++) {
        pictures.push(`img/img-${i}.jpg`);
    }

    const bodyImg = document.querySelector('.body-img');

    setInterval(() => {
        currentImage++;
        if (currentImage >= noOfImages) {
            currentImage = 0;
        }
        bodyImg.src = pictures[currentImage];
    }, 5000);

    // Initial image
    bodyImg.src = pictures[currentImage];
});

//================================================================
document.addEventListener('DOMContentLoaded',()=>{
    let sellImages = [];
    let sellNoOfImages = 5;

    for(let i = 1; i <= sellNoOfImages; i++){
        sellImages.push(`sell/sell-offer-${i}.webp`);
    }
})
//================================================================

let img = [];
let numberOfImages = 16;

for(let i = 1; i <= numberOfImages; i++){
    img.push(`plant/plant-${i}.jpg`);
}

const imgContainer = document.querySelector('.plant');

for(let i = 1; i <= numberOfImages; i++){
    const newImg = document.createElement('img');
    newImg.src = img[i-1];
    newImg.classList.add('plant-img');
    imgContainer.appendChild(newImg);
}
// Randomize plant images-css display flex body  overflow-x: hidden;
const slider = document.querySelector('.plant');

slider.addEventListener('mouseenter',()=>{
    slider.style.animationPlayState = "paused";
    slider.style.cursor = "pointer";
})

slider.addEventListener('mouseleave',()=>{
    slider.style.animationPlayState = "running";
    slider.style.cursor = "default";
})

//================================================================

let storeImg = [];
let numberOfStoreImg = 17;

for(let i = 1; i <= numberOfStoreImg; i++){
    storeImg.push(`store/store-${i}.jpg`);
}
 const storeContainer = document.querySelector('.store');

for(let i = 1; i <= numberOfStoreImg; i++){
    const newStoreImg = document.createElement('img');
    newStoreImg.src = storeImg[i-1];
    newStoreImg.classList.add('store-img');
    storeContainer.appendChild(newStoreImg);
}

const paused = document.querySelector('.store');

paused.addEventListener('mouseenter',()=>{
    paused.style.animationPlayState = "paused";
    paused.style.cursor = "pointer";
})

paused.addEventListener('mouseleave',()=>{
    paused.style.animationPlayState = "running";
    paused.style.cursor = "default";
})
//============================================================

document.addEventListener('DOMContentLoaded', ()=>{
    let pictures = [];
    let currentImage = 0;
    let noOfImages = 6;
    
    for(let i = 1; i <= noOfImages; i++){
        pictures.push(`sell/sell-offer-${i}.webp`)
    }

    const sellImg = document.querySelector(".sell1-container-img");
    
    setInterval(() => {
        currentImage++;
        if(currentImage >= noOfImages){
            currentImage = 0;
        }
        sellImg.src = pictures[currentImage];

    },5000)

    const paused = document.querySelector(".sell1-container-img")

    paused.addEventListener('mouseenter',()=>{
        paused.style.animationPlayState = "paused";
        paused.style.cursor = "pointer";
    })

    paused.addEventListener('mouseleave',()=>{
        paused.style.animationPlayState = "running";
        paused.style.cursor = "default";
    })
})

// ======= End animation =======================//

// =======================Start Products==================

const products = [
    {
        image: "product/product-1.jpg",
        name: "Peace Lily Indoor Outdoor Plant Air Purifier Oxygen Supplier",
        rating: 5,
        priceCents: 290
    },
    {
        image: "product/product-2.webp",
        name: "Ugaoo Lucky Bamboo 3 Layer Feng Shui Plant (green color)",
        rating: 3,
        priceCents: 390
    },
    {
        image: "product/product-3.webp",
        name: "Ugaoo Good Luck Jade Plant with Self Watering Pot",
        rating: 3,
        priceCents: 390
    },
    {
        image: "product/product-4.jpg",
        name: "Ugaoo Areca Palm Air Purifier Natural Live Plant",
        rating: 3,
        priceCents: 275
    },
    {
        image: "product/product-5.jpg",
        name: "GREEN LINE Flower Live Plant Adenium Plants for Garden Indoor(Live Bonsai Plant)",
        rating: 2.5,
        priceCents: 275
    },
];

const productsGrid = document.getElementById('products-grid');

products.forEach(product => {
    const productContainer = document.createElement('div');
    productContainer.classList.add('products-container');

    const productHtml = `
        <div class="product-img-container">
            <div class="product-img">
                <img src="${product.image}" alt="${product.name}" />
            </div>
            <div class="product-title">${product.name}</div>
            <div class="rating-container">
                <img src="ratings/rating-${product.rating * 10}.png" alt="rating-${product.rating}" />
            </div>
            <div class="product-price">$${(product.priceCents / 100).toFixed(2)}</div>
            <div class="product-quantity-container">
                <select>
                    ${Array.from({ length: 10 }, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join('')}
                </select>
            </div>
            <div class="product-spacer"></div>
            <div class="added-to-cart">
                <img src="icon/checkmark.png" alt="checkmark" />
                Added
            </div>
        </div>
        <button class="add-to-cart-button button-primary">Add to Cart</button>
    `;

    productContainer.innerHTML = productHtml;
    productsGrid.appendChild(productContainer);
});


// =======================End Products================================================