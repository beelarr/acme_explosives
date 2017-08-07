
let getCategories = function () {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "categories.json"
        }).done(function (cats) {
            console.log(cats);
           resolve()
        }).error(reject())
    })
};

let getTypes = function () {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "types.json"
        }).done(function(type){
            console.log(type);
            resolve()
        }).error(reject())
    })

};

let getProducts = function () {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "products.json"
        }).done(function(product){
            console.log(product);
            resolve()
        }).error(reject())
    })

};

