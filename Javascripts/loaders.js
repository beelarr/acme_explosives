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


let getProducts = function (e) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "./json/products.json",
        }).done(function(productData){
            for (let product in productData) {
                console.log(product);
                // console.log(productData);
                var products = productData[product];
                console.log(products);
                let categoryId = e.target.id;
                let counter = 0;
                let productNames = "";
                $(".container").html("");
                $.each(products, (index, value) => {
                        // console.log(value);
                    if ((value[Object.keys(value)]).id == categoryId) {
                        console.log('cat id', categoryId);
                        console.log('product id', (value[Object.keys(value)]).id);
                        console.log('product', (value[Object.keys(value)]).name)
                        productNames +=
                            `<div class="col-4">
                                <h4>${(value[Object.keys(value)]).name}</h4>
                                <p>${(value[Object.keys(value)]).description}</p>
                            </div>`;
                        console.log(productNames);

                            $(".container").html(`<section class="row">${productNames}</section>`);

                            counter++;
                        // if (counter % 2 === 0) {
                        //     productNames = "";
                        // }
                    }
                })

            }
            resolve(products)
        }).fail((error) => reject(error))
    })
};

