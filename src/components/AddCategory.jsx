import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories((cats) => {
                // Aquí verificas si existe la categoria.
                const exist = cats.find((x) => x === inputValue);
                // Si existe, retornas las categorías ya existentes.
                if (exist) return [...cats];

                return [inputValue, ...cats];
            });
            setInputValue('');
        }
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

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
};
