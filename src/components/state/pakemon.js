
export async function getDataPakemon(urlApiData){

    return new Promise((resolve, reject) => {

        fetch(urlApiData)
        .then(result => result.json())
        .then(data => {

            resolve(data);
        })
    })

}

export async function getPokemonItem(urlPakemon){

    return new Promise((resolve, reject) => {

        fetch(urlPakemon)
        .then(result => result.json())
        .then(data => {

            resolve(data);
        })
    })
}