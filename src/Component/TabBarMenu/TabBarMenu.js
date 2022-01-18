import React from 'react';
import {NavLink} from "react-router-dom";
import "./TabBarMenu.css";

function TabBarMenu() {
    return(
        <nav className='tab-bar'>
            <ul>
                <li className='tab-link'>
                    <NavLink to="/today" activeClassName='pinda'>
                        {/*you can also write active, maybe better*/}
                        Today
                    </NavLink>
                </li>
                <li className='tab-link'>
                    <NavLink to='/coming-week'activeClassName='pinda'>
                        Coming Week
                    </NavLink>
                </li>
            </ul>

        </nav>
    )
}
export default TabBarMenu;