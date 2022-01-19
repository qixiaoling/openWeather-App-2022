import React from 'react';
import {ReactComponent as Cloud} from '../Assets/icons/cloud.svg';
import {ReactComponent as Rain} from '../Assets/icons/raining.svg';
import {ReactComponent as Snow} from '../Assets/icons/snowfall.svg';
import {ReactComponent as Drizzle} from '../Assets/icons/drizzle.svg';
import {ReactComponent as Sunny} from '../Assets/icons/sun-_1_.svg';
import {ReactComponent as Wind} from '../Assets/icons/wind.svg';
// 1. Use svg as component
//let op! Change svg size is done by svg file, width=40px instead of 500pt.


//youtube Kevin+SVG via class or
// 2. Use svg like a img source
//     HTML:
//     <img class="example" src="example.svg" alt="smily"/>
//
//     CSS:
//     .example {
//         width: 100px;
//     }


// 3.Use svg directly in HTML but all svg at the bottom of HTML and
//     <svg>
//         <use href="example"></use>
//     </svg>
//
//     HTML:
//         <svg>
//         <symbol id="example>"></symbol>
//     </svg>


function IconMapper(type) {
    switch (type){
        case 'Clear' :
            return <Sunny/>;
        case 'Clouds' :
            return <Cloud/>;
        case 'Drizzle':
            return <Drizzle />;
        case 'Rain':
            return <Rain />;
        case 'Snow' :
            return <Snow />;
        case 'Mist':
        case 'Haze':
        case 'Smoke':
        case 'Fog':
        default:
            return <Wind/>;
    }
}
export default IconMapper;