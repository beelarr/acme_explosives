// $(function () {

    // $("#Fireworks").change(loadFireworks)
    // $("#Demolition").change(loadDemolition)
    // $("#Fishing").change(loadFishing)
    // $("#Bank-Heists").change(loadBankHeists)
// })



getCategories().then(
    getTypes(), console.error
    ).then(
        getProducts(), console.error
)
