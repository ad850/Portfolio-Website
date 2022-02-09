import React from 'react';
import './Menu.scss';
const Menu = ({ menuopen, setmenuOpen }) => {
    return (
        <div className={"menu " + (menuopen && "active")}>
            <ul onClick={() => { setmenuOpen(false) }}>
                <li ><a href="#intro">Home</a></li>
                <li ><a href="#portfolio">Portfolio</a></li>
                <li ><a href="#works">Works</a></li>
                <li ><a href="#testimonials">Tech Stack</a></li>
                <li ><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}

export default Menu
