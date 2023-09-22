// Create object for saving categories, products and information
const productsArray = [{
    category: 'Fruits',
    products: [{
        productName: 'Pumpkins',
        productPrice: 50,
        productAmount: 1,
        productInfo: 'Pumpkins are versatile, nutritious fruits, commonly orange but also found in other colors. They\'re used in a variety of dishes, from pumpkin pie to savory options like roasted pumpkin. They\'re rich in vitamins, fiber, and can be a part of healthy diets. Pumpkins are also famous for Halloween as Jack-o\'-lanterns.',
    }, {
        productName: 'Pear',
        productPrice: 40,
        productAmount: 1,
        productInfo: 'Pears are sweet, juicy fruits known for their distinctive shape and mild flavor. They come in various varieties, each with its unique taste and texture. Pears are a good source of fiber, vitamins, and antioxidants, making them a healthy snack or ingredient in both sweet and savory dishes.',
    }, {
        productName: 'Pineapple',
        productPrice: 54,
        productAmount: 1,
        productInfo: 'Pineapple is a tropical fruit known for its sweet, tangy taste and spiky outer skin. It\'s rich in vitamin C and offers various health benefits. Pineapple is commonly enjoyed fresh, in fruit salads, juices, and as a topping for desserts or pizza.',
    }]
}, {
    category: 'Vegetables',
    products: [{
        productName: 'Carrots',
        productPrice: 35,
        productAmount: 1,
        productInfo: 'Carrots are crisp, orange vegetables with a sweet taste. They are a good source of vitamin A and fiber, promoting eye health and digestion. Carrots are versatile and can be enjoyed raw, cooked, or as a snack.',
    }, {
        productName: 'Cucumber',
        productPrice: 43,
        productAmount: 1,
        productInfo: 'Cucumbers are cool, refreshing vegetables often eaten fresh or added to salads. They are hydrating, low in calories, and a source of vitamins and antioxidants, promoting hydration and overall health.',
    }, {
        productName: 'Potato',
        productPrice: 26,
        productAmount: 1,
        productInfo: 'Potatoes are starchy, versatile tuber vegetables. They are a dietary staple in many cuisines, offering a good source of carbohydrates and essential nutrients like vitamin C and potassium. Potatoes can be boiled, baked, mashed, or fried, and are used in a wide range of dishes worldwide.',
    }]
}, {
    category: 'Berries',
    products: [{
        productName: 'Gooseberry',
        productPrice: 56,
        productAmount: 1,
        productInfo: 'Gooseberries are small, round or oval-shaped berries that come in various colors, including green, red, and yellow. They have a tart and slightly sweet flavor and are commonly used in jams, jellies, pies, and desserts. Gooseberries are a good source of vitamin C, fiber, and antioxidants. They can be eaten fresh when ripe or used in various culinary applications, adding a unique tangy taste to dishes.',
    }, {
        productName: 'Red currant',
        productPrice: 63,
        productAmount: 1,
        productInfo: 'Red currants are small, translucent berries that grow in clusters on deciduous shrubs. They are typically bright red in color and have a tart flavor. Red currants are often used in jams, jellies, desserts, and beverages. They are rich in vitamin C and antioxidants, making them a nutritious addition to various dishes and a popular ingredient in many culinary traditions.',
    }, {
        productName: 'Cranberry',
        productPrice: 59,
        productAmount: 1,
        productInfo: 'Cranberries are small, round, red berries known for their tart taste. They are commonly used in sauces, juices, and baked goods, especially during the holiday season. Cranberries are rich in vitamin C and antioxidants, and they are associated with urinary tract health benefits. They can be enjoyed fresh, dried, or in various culinary creations.',
    }],
}]

// Create variables
let categoriesBlock = document.querySelector('#categories');
let productBlock = document.querySelector('#product-wrapper');
let infoBlock = document.querySelector('#info-wrapper');
let btn = document.querySelector('#btn');
let orderBtn = document.querySelector('#order-btn');
let orderBlock = document.querySelector('#orders-block');
let orderTable = document.querySelector('#order-table');
let tableRow = document.querySelector('#name-order');
let categoryBtn = document.querySelector('#category-btn');
let productShopInfoBlock = document.querySelector('#product-shop-info');


// Creating an event to go to the registration form
btn.addEventListener('click', () => {
    window.location.href = 'registerForm/register.html';
});

// Edit display for none
productBlock.style.display = 'none';
infoBlock.style.display = 'none';
orderBlock.style.display = 'none';
orderTable.style.display = 'none';


// Show categories
categoryBtn.addEventListener('click', () => {
    categoriesBlock.innerHTML = '';
    orderBlock.style.display = 'none';
    productBlock.style.display = 'none';
    infoBlock.style.display = 'none';
    categoriesBlock.style.display = 'block';
    displayCategories(productsArray, categoriesBlock, productBlock, infoBlock);
});

//Function for display categories
function displayCategories(productsArray, categoriesDiv, productDiv, infoDiv) {
    productShopInfoBlock.style.display = 'none';
    orderBlock.style.display = 'none';
    productsArray.forEach((item) => {
        let categoryButton = document.createElement('button');
        categoryButton.textContent = item.category;
        categoriesDiv.appendChild(categoryButton);

        categoryButton.addEventListener('click', () => {
            displayProducts(item.products, productDiv, infoDiv, categoriesDiv);
        });
    });
}

//Function for display products
function displayProducts(products, productDiv, infoDiv, categoriesDiv) {
    productDiv.innerHTML = '';
    productDiv.style.display = "block";
    productShopInfoBlock.style.display = 'none';
    orderBlock.style.display = 'none';

    products.forEach((productName) => {
        let productButton = document.createElement('button');
        productButton.textContent = productName.productName;
        productDiv.appendChild(productButton);

        productButton.addEventListener('click', () => {
            displayProductInfo(productName, infoDiv, productDiv, categoriesDiv);
        });
    });
}

//Function for create and show buy button
function createBuyButton(productArray, productDiv, infoDiv, categoriesDiv) {
    let buyButton = document.createElement('button');
    buyButton.textContent = "Buy";
    buyButton.style.display = "flex";
    buyButton.style.margin = "0px auto";
    buyButton.style.marginBottom = "5px";



    buyButton.addEventListener('click', () => {
        alert(`Good! You buy ${productArray.productName}.`);
        productDiv.style.display = "none";
        infoDiv.style.display = "none";
        categoriesDiv.style.display = "block";
        if(localStorage.getItem(`${productArray.productName}`) !== null) {
            productArray.productAmount++;
        } else {
            productArray.productAmount = 1;
        }
        localStorage.setItem(`${productArray.productName}`, JSON.stringify(productArray));
    });
    return buyButton;
}

//Function for display product info
function displayProductInfo(productName, infoDiv, productDiv, categoriesDiv) {
    infoDiv.innerHTML = '';
    infoDiv.style.display = "block";
    productShopInfoBlock.style.display = 'none';
    orderBlock.style.display = 'none';

    let infoText = document.createElement('p');
    infoText.textContent = productName.productInfo;
    infoDiv.appendChild(infoText);

    let buyButton = createBuyButton(productName, productDiv, infoDiv, categoriesDiv);
    infoDiv.appendChild(buyButton);
}


// Function for display order
function orderShow(categoriesDiv, orderBtn) {
    function updateOrderTable() {
        orderTable.innerHTML = '';
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let productData = JSON.parse(localStorage.getItem(key));
            let productInfo = `${key}, ${productData.productPrice}$/per unit`;
            let newProductRaw = document.createElement('tr');
            let newProductCell = document.createElement('td');
            let infoCell = document.createElement('td');
            let infoBtn = document.createElement('button');
            let removeProduct = document.createElement('button');
            removeProduct.textContent = 'X';
            removeProduct.className = 'remove-product-block';

            removeProduct.addEventListener('click', () => {
                localStorage.removeItem(key);
                updateOrderTable();
            });

            newProductCell.textContent = productInfo;
            infoBtn.textContent = 'Show Order Info';

            infoBtn.addEventListener('click', () => {

                productShopInfoBlock.style.display = 'flex';
                productShopInfoBlock.style.flexDirection = 'column';

                productShopInfoBlock.innerHTML = '';
                let productTitle = document.createElement('h2');
                let amount = document.createElement('span');
                let hideBtn = document.createElement('button');
                let finalPrice = document.createElement('span');
                let dateText = document.createElement('span');
                let date = new Date().toLocaleDateString();
                dateText.textContent = 'Date of order: ' + date;
                hideBtn.style.width = '50px';
                hideBtn.style.margin = '0 auto';
                hideBtn.style.marginTop = '10px';
                productTitle.textContent = `${productData.productName}`;
                amount.textContent = `Amount: ${productData.productAmount}`;
                hideBtn.textContent = `Hide`;
                finalPrice.textContent = `Final price: ${productData.productPrice * productData.productAmount}$`;
                productShopInfoBlock.append(productTitle);
                productShopInfoBlock.append(amount);
                productShopInfoBlock.append(finalPrice);
                productShopInfoBlock.append(dateText);
                productShopInfoBlock.append(hideBtn);

                hideBtn.addEventListener('click', () => {
                    productShopInfoBlock.style.display = 'none';
                });

            });

            infoCell.appendChild(infoBtn);
            infoCell.appendChild(removeProduct);
            newProductRaw.appendChild(newProductCell);
            newProductRaw.appendChild(infoCell);
            orderTable.appendChild(newProductRaw);
        }
    }

    return orderBtn.addEventListener('click', () => {
        categoriesDiv.style.display = 'none';
        orderBlock.style.display = 'block';
        orderTable.style.display = 'block';
        updateOrderTable();
    });
}


//Initialize function
displayCategories(productsArray, categoriesBlock, productBlock, infoBlock);
orderBtn.addEventListener('click', orderShow(categoriesBlock, orderBtn));
