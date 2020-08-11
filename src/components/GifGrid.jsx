import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const GifGrid = ({ category }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        getGifs();
    }, []); //El arreglo vacío nos indica que solo queremos que se ha ga la petición cuando el componente es renderizado por primera vez

    const getGifs = async () => {
        const url =
            "https://api.giphy.com/v1/gifs/search?q=Rick&limit=10&api_key=sA3cMqGEaxRD7MFHUxCN2TKWEjHGZIE9";
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
        //setImgs
    };
    //getGifs();

    return (
        <div>
            <h3>{category}</h3>
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}></button>
        </div>
    );
};
