let productsArray = [{
    category: 'Fruits',
    products: [{
        productName: 'Pumpkins',
        productInfo: 'Pumpkins are versatile, nutritious fruits, commonly orange but also found in other colors. They\'re used in a variety of dishes, from pumpkin pie to savory options like roasted pumpkin. They\'re rich in vitamins, fiber, and can be a part of healthy diets. Pumpkins are also famous for Halloween as Jack-o\'-lanterns.',
    }, {
        productName: 'Pear',
        productInfo: 'Pears are sweet, juicy fruits known for their distinctive shape and mild flavor. They come in various varieties, each with its unique taste and texture. Pears are a good source of fiber, vitamins, and antioxidants, making them a healthy snack or ingredient in both sweet and savory dishes.',
    }, {
        productName: 'Pineapple',
        productInfo: 'Pineapple is a tropical fruit known for its sweet, tangy taste and spiky outer skin. It\'s rich in vitamin C and offers various health benefits. Pineapple is commonly enjoyed fresh, in fruit salads, juices, and as a topping for desserts or pizza.',
    }]
}, {
    category: 'Vegetables',
    products: [{
        productName: 'Carrots',
        productInfo: 'Carrots are crisp, orange vegetables with a sweet taste. They are a good source of vitamin A and fiber, promoting eye health and digestion. Carrots are versatile and can be enjoyed raw, cooked, or as a snack.',
    }, {
        productName: 'Cucumber',
        productInfo: 'Cucumbers are cool, refreshing vegetables often eaten fresh or added to salads. They are hydrating, low in calories, and a source of vitamins and antioxidants, promoting hydration and overall health.',
    }, {
        productName: 'Potato',
        productInfo: 'Potatoes are starchy, versatile tuber vegetables. They are a dietary staple in many cuisines, offering a good source of carbohydrates and essential nutrients like vitamin C and potassium. Potatoes can be boiled, baked, mashed, or fried, and are used in a wide range of dishes worldwide.',
    }]
}, {
    category: 'Berries',
    products: [{
        productName: 'Gooseberry',
        productInfo: 'Gooseberries are small, round or oval-shaped berries that come in various colors, including green, red, and yellow. They have a tart and slightly sweet flavor and are commonly used in jams, jellies, pies, and desserts. Gooseberries are a good source of vitamin C, fiber, and antioxidants. They can be eaten fresh when ripe or used in various culinary applications, adding a unique tangy taste to dishes.',
    }, {
        productName: 'Red currant',
        productInfo: 'Red currants are small, translucent berries that grow in clusters on deciduous shrubs. They are typically bright red in color and have a tart flavor. Red currants are often used in jams, jellies, desserts, and beverages. They are rich in vitamin C and antioxidants, making them a nutritious addition to various dishes and a popular ingredient in many culinary traditions.',
    }, {
        productName: 'Cranberry',
        productInfo: 'Cranberries are small, round, red berries known for their tart taste. They are commonly used in sauces, juices, and baked goods, especially during the holiday season. Cranberries are rich in vitamin C and antioxidants, and they are associated with urinary tract health benefits. They can be enjoyed fresh, dried, or in various culinary creations.',
    }],
}]

let categoriesDiv = document.querySelector('#categories');
let productDiv = document.querySelector('#product-wrapper');
let infoDiv = document.querySelector('#info-wrapper');

productDiv.style.display = "none";
infoDiv.style.display = "none";


productsArray.forEach((item) => {
    let categoryButton = document.createElement('button');
    categoryButton.textContent = item.category;
    categoriesDiv.appendChild(categoryButton);

    categoryButton.addEventListener('click', () => {
        productDiv.innerHTML = '';
        productDiv.style.display = "block";
        item.products.forEach((productName) => { // Відображаємо назви товарів
            let productButton = document.createElement('button');
            productButton.textContent = productName.productName;
            productDiv.appendChild(productButton);

            productButton.addEventListener('click', () => {
                let buyButton = document.createElement('button');
                buyButton.textContent = "Buy";
                buyButton.style.display = "flex";
                buyButton.style.margin = "0px auto";
                buyButton.style.marginBottom = "5px";

                infoDiv.innerHTML = '';
                infoDiv.style.display = "block";
                let infoText = document.createElement('p');
                infoText.textContent = productName.productInfo;
                infoDiv.appendChild(infoText);
                infoDiv.appendChild(buyButton);

                buyButton.addEventListener('click', () => {
                    alert(`Good! You buy ${productName.productName}.`);
                    productDiv.style.display = "none";
                    infoDiv.style.display = "none";
                    categoriesDiv.style.display = "block";
                });
            });
        });
    });
});


