import React, {useState, useEffect} from 'react';
import axios from "axios"

import CardPakemon from "../../Card/CardPakemon";
import { getDataPakemon, getPokemonItem } from '../../state/pakemon';
import Search from '../Search/Search';
import Tags from '../Tags/Tags';
import MultiSelect from "react-multi-select-component";
// import color from '../../redux/color';

const List = () => {

    const [pakemons, setPokemons] = useState([]);
    const [load, setLoad] = useState(true);
    
    const [nextPageLink, setNextLink] = useState('');
    const [prevPageLink, setPrevLink] = useState('');

    const [perPage, setPage] = useState(20);

    const [types, setTypes] = useState([]);

    const inputPerPageCount = (e) =>{

        setPage(e.target.value);
    }
    
    const linkApiData = `https://pokeapi.co/api/v2/pokemon/?limit=${perPage}`;

    useEffect(() => {

        async function getData() {

            let response = await getDataPakemon(linkApiData);
            // console.log(response);

            setNextLink(response.next);
            setPrevLink(response.previous);

            // let responsePokemon = 
            await getPokem(response.results);
            // console.log(responsePokemon);

            setLoad(false);

        }

        getData();

    }, []);

    const nextPage = async () => {
        
        setLoad(true);
        
        let pakemonus = await getDataPakemon(nextPageLink);
        await getPokem(pakemonus.results);
        
        setNextLink(pakemonus.next);
        setPrevLink(pakemonus.previous);
        
        setLoad(false);
    }

    const prevPage = async () => {
        
        if(!prevPageLink )
        {
            return;
        }

        setLoad(true);
        
        let pakemonus = await getDataPakemon(prevPageLink);
        await getPokem(pakemonus.results);
        
        setNextLink(pakemonus.next);
        setPrevLink(pakemonus.previous);
        
        setLoad(false);
    }

    const getPokem  = async dataPakemons => {

        let itemsPakemon = await Promise.all(dataPakemons.map(async pokemon => {
            
            let currentPokemon = await getPokemonItem(pokemon.url);

            return currentPokemon;
        }));

        setPokemons(itemsPakemon);
        setTypes(itemsPakemon.types);
    } 

    const submitGetPakemon = async (e) =>{

        e.preventDefault();
        // get pakemon
        setLoad(true);
        
        let pakemonus = await getDataPakemon(linkApiData);
        await getPokem(pakemonus.results);
        
        setLoad(false);
    }


    // console.log(pakemons);

      const color = [
        {label: "bug", value: "bug"},
        {label: "dragon", value: "dragon" },
        {label: "fairy", value: "fairy" },
        {label: "fire", value: "fire"},
        {label: "ghost", value: "ghost" },
        {label: "ground" , value: "ground"},
        {label: "normal" , value: "normal"},
        {label: "pyschic", value: "pyschic"},
        {label: "steel" , value: "steel"},
        {label: "dark" , value: "dark"},
        {label: "electric", value: "electric" },
        {label: "fighting" , value: "fighting"},
        {label: "flying" , value: "flying"},
        {label: "grass", value: "grass" },
        {label: "ice" , value: "ice"},
        {label: "poison", value: "poison" },
        {label: "rock", value: "rock" },
        {label: "water", value: "water" },        
      ]
     
      const [selected, setSelected] = useState([]);
     

    // let listPakemon = pakemons.filter(poke => poke.types[0].type.name = type[0]).map((pakemon, index) => {
    //     // debugger;
    //     console.log(pakemon.name);
    //     return <CardPakemon id={index}
    //         name={pakemon.name}
    //         img={pakemon.sprites["front_default"]}
    //         type={pakemon.types}
    //         stats={pakemon.stats}
    //     />;
    // } );
    
    const submitFilterPakemon = async (e) =>{

        e.preventDefault();
        // get pakemon
        setLoad(true);
        
        let pakemonus = await getDataPakemon(linkApiData);
        await getPokem(pakemonus.results);
        
        pakemons.filter((poke, i) => poke.types[0].type.name = selected[0].label).map((pakemon, index) => {
            
            return <CardPakemon id={index}
                name={pakemon.name}
                img={pakemon.sprites["front_default"]}
                type={pakemon.types}
                stats={pakemon.stats}
            />;
        } );

        setPokemons(pakemons);
        
        setLoad(false);
    }

    const submitFilterClearPakemon = async (e) =>{

        e.preventDefault();
        // get pakemon
        setLoad(true);
        
        let pakemonus = await getDataPakemon(linkApiData);
        await getPokem(pakemonus.results);
        setSelected([]);
        
        setLoad(false);
    }

    let listPakemon = pakemons.map((pakemon, index) => {
        // debugger;
        console.log(pakemon.name);
        return <CardPakemon id={index}
            name={pakemon.name}
            img={pakemon.sprites["front_default"]}
            type={pakemon.types}
            stats={pakemon.stats}
        />;
    } );


    return (
        <div>
           {
               load ? <h1>Завантажую тобі пакемонів, почекай...</h1> : (
                 <div className="container-fluid">
                    <h1 className="text-left">
                       Каталог пакемонов
                   </h1>            
                    <hr/>
                   <div className="d-flex justify-content-between">
                    <div className="btn p-2 text-left">
                        Навігація <br/> <br/>
                        <button onClick={prevPage} className="btn btn-blcok btn-primary mr-3">Назад</button>
                        <button onClick={nextPage} className="btn btn-blcok btn-primary mr-3">Вперед</button>
                    </div>
                    <div className="filter col-md-4 text-left">
                        {/* <pre>{JSON.stringify(selected)}</pre> */}
                        <label className="m-2">Оберіть тип для фільтрування</label>
                        <MultiSelect
                            options={color}
                            value={selected}
                            onChange={setSelected}
                            labelledBy={"Select"}
                            className="m-2"
                        />

                        <button onClick={submitFilterPakemon} className="btn btn-blcok btn-primary m-2">Фільтрувати</button>
                        <button onClick={submitFilterClearPakemon} className="btn btn-blcok btn-outline-primary m-2">Скинути</button>
                    </div>
                    <div className="per-page p-2 text-left">
                        Обрано: 
                        {
                            perPage
                        }
                        <form className="row">
                        <select onChange={inputPerPageCount} className="form-control m-2">
                            <option selected disabled>Оберіть к-ть пакемонів</option>
                            <option value="10"> 10</option>
                            <option value="20"> 20</option>
                            <option value="50"> 50</option>
                        </select>
                        <button onClick={submitGetPakemon} className="btn btn-blcok btn-primary m-2">  Встановити </button>
                        </form>
                    </div>
                   </div>
                   <hr/>
                   <div className="container-fluid">    
                        <div className="row">
                        {
                            listPakemon
                        }
                      
                        </div>
                   </div>
                 </div>
               )
           }
        </div>

    );


}

export default List