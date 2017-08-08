
let getCategories = function () {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "categories.json"
        }).done(function (cats) {
            $.each(cats.categories, (index, item) => {
                console.log(item);
                parseCatsId(item);
                parseCatsName(item)
            });

           resolve()
        }).error(reject("Categories didn't load"))
    })
};

let getTypes = function () {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "types.json"
        }).done(function(type){
            // console.log(type.types);
            //get id and send it to
            $.each(type.types, (index, item) => {
                // console.log(item.category)
                // console.log(item.id)
                parseTypesCategory(item);
                parseTypesId(item);
                parseTypesName(item)
            });
            resolve()
        }).error(reject("Types didn't load"))
    })

};

let getProducts = function () {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "products.json"
        }).done(function(product){
            // console.log(product)
            $.each(product.products, (index, item) => {
                // console.log("Index", index)
                // console.log("Item", item)
                // console.log(item[Object.keys(item)].name)
                parseProducts(item[Object.keys(item)]);
                parseTypesOfProducts(item[Object.keys(item)])
                });
            resolve()
        }).error(reject("Products didn't load"))
    })

};

