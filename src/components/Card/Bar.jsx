
import React from 'react';

const Bar = (props) => {

    return(
        <div className="stats">
            {
                props.stats.map(stat => {
                    return(
                       <div>
                           <div className="d-flex justify-content-between">
                               <div className="name">
                                  <i> {stat.stat.name}</i>
                               </div>
                               <div className="bar">
                                   {stat.base_stat} / 100
                               </div>
                           </div>

                           <div className="progress">
                               <div className="progress-bar" style={{width: `calc(1% * ${stat.base_stat})`}} aria-valuenow={stat.base_stat} aria-valuemin="0" aria-valuemax="100">{stat.base_stat}%</div>
                           </div>

                       </div>
                    )
                })
            }
        </div>
    );
}

export default Bar