import React, { useState } from 'react';
import { useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(category).then((imgs) => setImages(imgs));
    }, [category]); //El arreglo vacío nos indica que solo queremos que se ha ga la petición cuando el componente es renderizado por primera vez

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {images.map((img) => (
                    <GifGridItem key={img.id} {...img} />
                ))}
            </div>
        </>
    );
};
