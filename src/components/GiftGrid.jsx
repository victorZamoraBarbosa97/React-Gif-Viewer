import PropTypes from 'prop-types'
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';



export const GiftGrid = ({ category }) => { // recibimos como prop la categoria

    const { images, isLoading } = useFetchGifs( category );
    // state que almacena las imagenes de mi componente

    console.log(images);

    return (
        <>
            <h3> { category } </h3>
            {
                // and logico
                isLoading && (<h2 > Cargando ... </h2>)

            }
            <div className='card-grid'>
            {
                images.map( ( img )  => (
                    <GifItem key = { img.id } { ...img } />
                ))
            }
            </div>
        </>
    )
}

GiftGrid.propTypes = {
    category : PropTypes.string.isRequired
}

