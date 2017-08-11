

$("#0, #1, #2, #3 ").click((e) => {
    console.log("Fireworks is working")
    getCategories(e)
        .then(getTypes(e), console.error)
        .then(getProducts(e), console.error)
});


