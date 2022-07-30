import { useState } from 'react'


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');


    const onInputChange = ( { target } ) =>{ // desestructurando la propiedad target de event
        setInputValue( target.value ) // cambiando el valor del estado por el input obtenido
    }


    const onSubmit = ( event ) => {
        event.preventDefault(); // para evitar la recarga de la pagina al enviar el formulario
        const inputClean = inputValue.trim();  // limpiar input

        if (inputClean.length <= 1) return;    // Si el input value es menor a 1 se cancela

        // setCategories puede hacer un callback para optener las categorias ya existentes, y asi no tener que enviarlas por las props
        // setCategories( categories => [inputValue, ...categories] ); 

        // llamar a la funcion onNewCategory la cual recibi por medio de los props y pasarle el input a agregar
        onNewCategory(inputClean)

        // Limpiar la caja del input despues de guardar el valor
        setInputValue('');
    }

  return (
    <form onSubmit={ onSubmit }>
        <input  
            type = "text"
            placeholder = "Buscar Gifs"
            value = { inputValue }
            onChange = { onInputChange } // se manda por default el objeto event
        />
    </form>
    )
}
