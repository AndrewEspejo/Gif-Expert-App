import React from "react";
import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const GifExpertApp = () => {
    // const categories = ["One Piece", "Dragon Ball", "Naruto"];
    const [categories, setCategories] = useState(["One Piece"]);
    // const handleAdd = () => {
    //     setCategories(["Bleach", ...categories]);
    // };
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ul>
                {categories.map((category) => {
                    return <GifGrid category={category} key={category} />;
                })}
            </ul>
        </>
    );
};
