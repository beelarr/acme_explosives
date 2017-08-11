let getProducts = function (e) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "./json/products.json",
        }).done(function(productData){
            for (let product in productData) {
                var products = productData[product];
                let categoryId = e.target.id;
                // let counter = 0;
                let productNames = "";
                $(".container").html("");
                $.each(products, (index, value) => {
                    // console.log(value);
                    if ((value[Object.keys(value)]).id == categoryId) {
                        productNames +=
                            `<div class="col-4">
                                <h4>${(value[Object.keys(value)]).name}</h4>
                                <p>${(value[Object.keys(value)]).description}</p>
                            </div>`;

                        $(".container").html(`<section class="row">${productNames}</section>`);

                        // counter++;
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
