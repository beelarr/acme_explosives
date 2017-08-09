getCategories()
    .then((resolve) => {
    console.log(resolve.categories[0].id)

    return getTypes(resolve)
    },
        console.error
    )
    .then((resolve) => {
    console.log('types?', resolve)
        return getProducts(resolve)
    },
        console.error
    )
    .then((resolve) => {
    console.log('products', resolve)
    })