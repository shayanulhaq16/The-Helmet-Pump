const productsContainer = document.querySelector(".products-grid");




const displayData = async () => {

    const data = await fetch("https://dummyjson.com/products");
    const convertedData = await data.json();
    const allProducts = convertedData.products;
    console.log(allProducts);

    for (let i = 0; i < allProducts.length; i++) {
        const element = allProducts[i];

        productsContainer.innerHTML += ` <div class="product-card">

                <div class="product-image">
                    <img src="${element.images[0]}" alt="">
                </div>

                <div class="product-name">
                    ${element.title}
                </div>

                <div class="rating">
                    ${"★".repeat(Math.floor(element.rating))} <span>(124)</span>
                </div>

                <div class="price">
                    $${element.price}
                    <span class="old-price">$${Math.round((element.price / (1 - element.discountPercentage / 100)))}</span>
                </div>

                <button class="add-cart">
                    🛒 &nbsp; Add to Cart
                </button>

            </div>
        
        `
        
    }
    
}

displayData();