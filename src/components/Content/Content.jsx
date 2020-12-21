import React from 'react';
import {Route} from "react-router-dom";

import List from './List/List'
import Search from "./Search/Search";

const Content = (props) => {
    return(
        <div className="m-2 mt-5 pt-5">
            {/* <div className="d-flex justify-content-between">

                <div className="col-md-6">
                    <Search/>
                </div>

            </div> */}
            <Route exact path="/pokemons" component={List} />
            <Route exact path="/search" component={Search} />
        </div>
    );
}

export default Content