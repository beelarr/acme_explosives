getCategories()
    .then((resolve) => {
        let categories = resolve.categories
        console.log(categories)
        return getTypes(resolve)
    },
        console.error
    )
    .then((resolve) => {
        let types = resolve.types
        console.log('types?', types)

        return getProducts(resolve)
    },
        console.error
    )
    .then((resolve) => {
        let products = resolve.products
        console.log('products', products)
    })