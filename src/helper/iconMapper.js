import React from 'react';
import {ReactComponent as Cloud} from '../Assets/icons/cloud.svg';
import {ReactComponent as Rain} from '../Assets/icons/raining.svg';
import {ReactComponent as Snow} from '../Assets/icons/snowfall.svg';
import {ReactComponent as Drizzle} from '../Assets/icons/drizzle.svg';
import {ReactComponent as Sunny} from '../Assets/icons/sun-_1_.svg';
import {ReactComponent as Wind} from '../Assets/icons/wind.svg';



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