import React from "react";
import { useState } from "react";
import Fragment from "react-dom";
import { AddCategory } from "./AddCategory";

export const GifExpertApp = ({}) => {
    // const categories = ["One Piece", "Dragon Ball", "Naruto"];
    const [categories, setCategories] = useState([
        "One Piece",
        "Dragon Ball",
        "Naruto",
    ]);
    // const handleAdd = () => {
    //     setCategories(["Bleach", ...categories]);
    // };
    return (
        <React.Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ul>
                {categories.map((category) => {
                    return <li key={category}>{category}</li>;
                })}
            </ul>
        </React.Fragment>
    );
};
