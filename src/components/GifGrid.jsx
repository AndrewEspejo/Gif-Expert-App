import React, { useState } from "react";
import { useEffect } from "react";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs();
    }, []); //El arreglo vacío nos indica que solo queremos que se ha ga la petición cuando el componente es renderizado por primera vez

    const getGifs = async () => {
        const url =
            "https://api.giphy.com/v1/gifs/search?q=bleach&limit=10&api_key=sA3cMqGEaxRD7MFHUxCN2TKWEjHGZIE9";
        const resp = await fetch(url);

        const { data } = await resp.json();

        const gifs = data.map((img) => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url,
            };
        });
        console.log(gifs);
        setImages(gifs);
        //setImgs
    };
    //getGifs();

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
