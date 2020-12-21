import React, {useState} from 'react';
import axios from "axios"

import CardPakemon from "../../Card/CardPakemon";

const Search = (props) => {

    const [pokemon, setSearchPakemonu] = useState('');
    const [dataPakemonu, setDataPakemonu] = useState([]);
    const [typePakemonu, setTypePakemonu] = useState('');
    const [statsPakemonu, setStatsPakemonu] = useState([]);

    const getApiPokemon = async () => {

        const arrayPakemon = [];

        try{

            // url api pakemen using axois
            const urlAPI = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
            const resultPakemon = await axios.get(urlAPI);

            // insert to array searched pakemon
            arrayPakemon.push(resultPakemon.data);

            // set data
            setTypePakemonu(resultPakemon.data.types);
            setStatsPakemonu(resultPakemon.data.stats);
            setDataPakemonu(arrayPakemon);

            // show console result
            console.log(resultPakemon);

        }catch(e){
            console.log(e);
        }
    }

    const inputNameSearchPakemon = (e) =>{
        // set name searched pakemon
        setSearchPakemonu(e.target.value.toLowerCase());
    }

    const submitGetPakemon = (e) =>{
        // stop load page
        e.preventDefault();
        // get pakemon
        getApiPokemon();
    }

    let pakemon = dataPakemonu.map(pakemon => <CardPakemon
        name={pakemon.name}
        img={pakemon.sprites["front_default"]}
        type={typePakemonu}
        stats={statsPakemonu}
    />);

    return(
        <div className="text-left container">
            <div className="d-flex justify-content-between border-bottom mb-5">
                <div className="left">
                    <h3>Пошук</h3>
                    <p className="text-secondary">Пошук пакемона за назвою</p>
                </div>
                <div className="form-search w-50">
                    <form onSubmit={submitGetPakemon} className="d-flex justify-content-between">
                        <input type="text" onChange={inputNameSearchPakemon} className="form-control m-1" placeholder="Введіть назву"/>
                    </form>
                </div>

            </div>

            <div className="container">
                {
                    pakemon
                }
            </div>

        </div>
    );
}

export default Search