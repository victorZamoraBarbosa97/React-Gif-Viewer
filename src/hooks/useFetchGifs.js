
import { useState, useEffect } from "react";
import { getGifs } from '../helpers/GetGifs';


export const useFetchGifs = ( category ) => {
    const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    /* declaramos la funcion newImages fuera de useEffect por que las funciones async retornan una promesa
    y el Hook useEffect espera una funcion como return */
    const newImages = async() => {
        const images = await getGifs(category);
        setImages(images);
        setisLoading(false);
    }

    /*
    get Gifs Data
    si las depedencias estan vacias el useEfect solo se ejecutara en el primer render del componente
    */
    useEffect(() => {
        newImages(); // llamar a las nuevas imagenes
    }, []); 

    return {
        images,
        isLoading,
    }
}
