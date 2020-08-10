import React from "react";
import { useState } from "react";

export const AddCategory = () => {
    const [inputValue, setinputValue] = useState("Hola mundo");

    const handleInputChange = (e) => {
        setinputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit hecho");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
};
