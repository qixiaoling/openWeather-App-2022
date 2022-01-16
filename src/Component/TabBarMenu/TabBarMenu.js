import React from 'react';
import {NavLink} from "react-router-dom";

function TabBarMenu() {
    return(
        <nav className='tab-bar'>
            <ul>
                <li>
                    <NavLink to="/" exact>
                        Today
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/coming-week" exact>
                        Coming Week
                    </NavLink>
                </li>
            </ul>

        </nav>
    )
}
export default TabBarMenu;