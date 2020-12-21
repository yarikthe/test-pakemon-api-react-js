import React, {useState} from 'react';
import axios from "axios"

import {Multiselect} from "multiselect-react-dropdown";
import CardPakemon from "../../Card/CardPakemon";

const Tags = (props) => {

    const linkApiType = `https://pokeapi.co/api/v2/type/`;

    const data = [
        {Type: "psychic", id: 1},
        {Type: "aqwesd", id: 2},
        {Type: "qwe", id: 1}
    ]
    const [types, setTP] = useState(data);


    const options = [];
    const [type, setType] = useState('');

    const handleChange = (e) => {

        setType(e.target.value.toLowerCase());
    }
    const filterOptions = (e) => {
        // Triggered for filter input changes
        e.preventDefault();
    }


    return (
        <div className="text-left">

            <div className="container d-flex justify-content-between border-bottom mb-5">
                <div className="left">
                    <h3>Фільтр</h3>
                    <p className="text-secondary">Фільтр пакемона за типом</p>
                </div>
                <div className="form-search row">
                    <form className="d-flex justify-content-between">
                        <Multiselect options={types} displayValue="Type" onChange={handleChange} />
                        <button filterOptions={filterOptions} onClick={filterOptions} className="btn btn-primary h-50 ml-2">Пакемони</button>
                    </form>
                </div>
                
            </div>

            <div className="container">
                    {
                        
                    
                    }
            </div>

        </div>
    );
}

export default Tags