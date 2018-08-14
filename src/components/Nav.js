import React from 'react';
import { Link } from 'react-router-dom';

import './css/style.css';


const Nav = () => {
    return(
        <nav>
            <Link to="/"><h4>Poketrave | Home</h4></Link>
        </nav>
    )
}

export default Nav;