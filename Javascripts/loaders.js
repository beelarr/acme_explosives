let getCategories = function () {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "./json/categories.json"
        }).done(function (meowData) {
            resolve(meowData)
            }).fail((error) => reject(error))
            })
};

let getTypes = function () {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "./json/types.json",
            // data: dataFromCats
        }).done(function(typeData){
            resolve(typeData)
            }).fail((error) => reject(error))
    })

};

let getProducts = function () {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "./json/products.json",
            // data: resultFromTypes
        }).done(function(productData){
            resolve(productData)
        }).fail((error) => reject(error))
    })
};

