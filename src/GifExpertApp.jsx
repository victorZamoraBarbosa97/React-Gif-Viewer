import { useState } from "react";
import { AddCategory, GiftGrid } from "./components/";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const  onAddCategory = ( newCategory ) => {
        
        categories.includes( newCategory) ? alert('Categoria ya existente') : 
        
        // agregar la nueva categoria a mi state
        setCategories( [ newCategory, ...categories] )

        /* otra forma de agregar un nuevo elemento
        setCategories(categories.concat(newCategory)); 

         usando callback
        setCategories( cat => [...cat, ''Valorant'])
        */
    }

  return (
    <>
        <h1>GifExpertApp</h1>
        
        {/* Input Enviando la funcion de mi useState para alterar las categorias */}
        <AddCategory onNewCategory = { onAddCategory } /> 

        {/* Listado de Gif */}
        { categories.map( category => (
                <GiftGrid 
                    key = { category } 
                    category = {category }
                />
            ))
        }
    </>
  )
}
