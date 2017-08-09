getCategories()
    .then((resolve) => {
        var categories = resolve.categories
        console.log(categories)
        return getTypes(resolve)
    },
        console.error
    )
    .then((resolve) => {
        var types = resolve.types
        return getProducts(resolve)
    },
        console.error
    )
    .then((resolve) => {
        var products = resolve.products
    })