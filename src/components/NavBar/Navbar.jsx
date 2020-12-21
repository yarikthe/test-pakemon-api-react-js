import React from 'react';
import {NavLink} from "react-router-dom";

import navbar from "./navbar.module.css"

const Navbar = (props) => {
    return(
        <div className="justify-content-between d-flex mb-5 fixed-top bg-warning shadow">

            <h1 className="bg-warning m-2 rounded-lg p-2 text-white">Пакемони</h1>

            <div className={navbar.nav}>
                <NavLink to="/pokemons" activeClassName={navbar.navbarActive}>
                    <label className={navbar.link}>Пакемони</label>
                </NavLink>
                <NavLink to="/search" activeClassName={navbar.navbarActive}>
                    <label className={navbar.link}>Пошук</label>
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar