
// funcion asincronica con la cual hago un una consulata a la API de GIPHY 
export const getGifs = async(category) => {

    const url = 
    `https://api.giphy.com/v1/gifs/search?api_key=p0CPNGk29y7KXMAsAemMtacJq7w4PGR7&q=${ category }&limit=20&offset=0&rating=g&lang=en`

    // enviando la consulta a la API y esperar la respuesta
    const resp = await fetch( url);

    // Desestructurando la Data
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id : img.id,
        title : img.title,
        url : img.images.downsized_medium.url
    }));
    return gifs;
}