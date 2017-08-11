let getCategories = function (e) {


    return new Promise((resolve, reject) => {
        $.ajax({
            url: "./json/categories.json"
        }).done(function (meowData) {
            for (let cat in meowData) {
                var categories = meowData[cat]
            }
            let categoryId = e.target.id;
            $(".category").html("");

            $.each(categories, (index, value) => {
                console.log(value.name)
                if (value.id == categoryId) {
                    $(".category").html(`<h1> ${value.name} category</h1>`)
                }

                resolve(meowData)

            })
        }).fail((error) => reject(error));
    })
};