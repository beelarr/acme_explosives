let getCategories = function (e) {


    return new Promise((resolve, reject) => {
        $.ajax({
            url: "./json/categories.json"
        }).done(function (meowData) {
            resolve(meowData)
            }).fail((error) => reject(error))
            })
};

let typesArray = [];


let getTypes = function (e) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "./json/types.json",
            // data: dataFromCats
        }).done(function(typeData){
            for (let type in typeData){
                var types = typeData[type]
            }
            types.forEach((type) => {
                typesArray.push(type)
            });
            resolve()
            }).fail((error) => reject(error))
    })

};

let productsArray = [];

let getProducts = function (e) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "./json/products.json",
        }).done(function(productData){
            for (let product in productData) {
                var products = productData[product]
                products.forEach((product) => {
                    productsArray.push(product)
                });

                let productsId = e.target.id
                let counter = 0;
                let productNames = ""
                gallery.innerHTML = ""
                productsArray.forEach((products) => {
                    if (products.id == productsID) {
                        productNames +=
                            `<div class="col-3 card">
                                <h4>${products.name}</h4>
                                <img src="${product.image}" alt="product image">
                                <p>${products.description}</p>
                            </div>`;
                        counter++;

                        if (counter % 3 === 0) {
                            var rowCounter = 1;
                            gallery.innerHTML += `<section class="row">${productNames}</section>`:
                        }
                    }
                })

            }
            resolve()
        }).fail((error) => reject(error))
    })
};

