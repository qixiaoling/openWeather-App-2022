import React from 'react';
import {Link} from "react-router-dom";

function TabBarMenu() {
    return(
        <nav className='tab-bar'>
            <ul>
                <li>
                    <Link to="/" >
                        Today
                    </Link>
                </li>
                <li>
                    <Link to='/coming-week'>
                        Coming Week
                    </Link>
                </li>
            </ul>

        </nav>
    )
}
export default TabBarMenu;