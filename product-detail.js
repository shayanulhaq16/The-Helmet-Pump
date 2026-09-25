const product = document.querySelector(".product-detail");



const showDetail = async () => {

   
    
    

    const data = await fetch(`https://dummyjson.com/products/1`);
    const convertedData = await data.json();


    product.innerHTML = ` 
    
    
    <div class="product-gallery">

                <div class="main-image">

                    <span class="sale-badge">
                        ${convertedData.discountPercentage}% OFF
                    </span>

                    <img src="${convertedData.images[0]}" alt="${convertedData.title}">

                </div>


                

            </div>
    
    
    <div class="product-info">

                <div class="brand">
                    ${convertedData.brand}
                </div>

                <h1 class="product-title">
                    ${convertedData.title}
                </h1>


                <!-- Rating -->

                <div class="rating-row">

                    <div class="stars">
                        ${"★".repeat(Math.round(convertedData.rating))}
                    </div>

                    <div class="review-count">
                        ${convertedData.rating} (${convertedData.reviews.length} Reviews) 
                    </div>

                </div>


                <div class="divider"></div>


                <!-- Price -->

                <div class="price-section">

                    <div class="current-price">
                       $${convertedData.price}
                    </div>

                    <div class="old-price">
                        $${(Math.ceil(convertedData.price / (1 - convertedData.discountPercentage / 100)))}.00
                    </div>

                    <div class="discount">
                        ${convertedData.discountPercentage}% OFF
                    </div>

                </div>

                <div class="tax-text">
                    Inclusive of all taxes
                </div>


                <div class="divider"></div>


                <!-- Description -->

                <div class="description-title">
                    Product Description
                </div>

                <p class="description">
                    ${convertedData.description}
                </p>


                <div class="divider"></div>


            


                <!-- Quantity -->

                <div class="quantity-section">

                    <div class="quantity-title">
                        Quantity:
                    </div>

                    <div class="quantity">
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>

                </div>


                <!-- Buttons -->

                <div class="buttons">

                    <button class="add-cart">
                        🛒 &nbsp; Add to Cart
                    </button>

                    <button class="buy-now">
                        Buy Now
                    </button>

                    <button class="wishlist">
                        ♡
                    </button>

                </div>


                <!-- Delivery -->

                <div class="delivery-info">

                    <div class="delivery-box">

                        <div class="delivery-icon">
                            🚚
                        </div>

                        <div>
                            <strong>Free Delivery</strong>
                            <span>
                                Delivery within 3-5 days
                            </span>
                        </div>

                    </div>


                    <div class="delivery-box">

                        <div class="delivery-icon">
                            ↩️
                        </div>

                        <div>
                            <strong>Easy Returns</strong>
                            <span>
                                30 days return policy
                            </span>
                        </div>

                    </div>

                </div>

            </div> 
    
    `

}

showDetail();



const headerContainer = document.querySelector(".display-header");

const displayHeader = async () => {

    const response = await fetch("header.html");
    const header = await response.text();
    
    headerContainer.innerHTML = header;
    



};

displayHeader();


const footerContainer = document.querySelector(".display-footer");

const displayFooter = async () => {

    const footerData = await fetch("footer.html");
    const footer = await footerData.text();

    footerContainer.innerHTML = footer;
}

displayFooter();
