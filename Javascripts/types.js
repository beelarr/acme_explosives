let typesArray = [];


let getTypes = function (e) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "./json/types.json",
            // data: dataFromCats
        }).done(function(typeData){
            for (let type in typeData){
                var types = typeData[type]
            }
            let typeId = e.target.id;
            $(".type").html('')

            $.each(types, (index, value) =>{
                // console.log(value.name)
                // console.log(value.id)
                // console.log(typeId)
                if (value.id == typeId) {
                    console.log(`${value.name}`)
                    $(".type").html(`<h4>${value.name} type</h4>`)
                }
            });
            resolve()
        }).fail((error) => reject(error))
    })

};