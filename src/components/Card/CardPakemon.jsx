import card from "./card.module.css"

import React from 'react';

import Bar from '../Card/Bar';
import color from '../../redux/color';

const CardPakemon = (props) => {

    return(
        <div className="col-md-3 p-2"> 
            <div className="rounded-lg  shadow p-5 border text-left">
                <div className="d-flex2 justify-content-between">
                {/* <div className="image col-md-51">
                    <img className={card.imgPokemon} src={props.img} alt={props.name}/>
                </div> */}
                <div className="info col-md-71">
                    {/* <h1>
                        <a href="#">
                            {props.name}
                        </a>
                    </h1> */}
                    <p>
                        <div className="">
                            <label>#{props.id +1}</label>
                            <br/>
                            <small className="text-secondary">Тип:</small>
                        </div>
                        <div className="d-flex justify-content-left">
                            {
                                props.type.map(type => {
                                    return(
                                        <div className={card.type} style={{backgroundColor: color[type.type.name]}}>
                                            {
                                                type.type.name
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <img className={card.imgPokemon} src={props.img} alt={props.name}/>
                        <h1>
                        <a href="#">
                            {props.name}
                        </a>
                        
                    </h1>
                    </p>
                    <p>
                        <small className="text-secondary">Cтатистика:</small>
                        <Bar stats={props.stats}/>
                    </p>

                </div>
                </div>
            </div>
        </div>
    );
}

export default CardPakemon