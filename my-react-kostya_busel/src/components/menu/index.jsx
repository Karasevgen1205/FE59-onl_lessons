import React from 'react';
import styles from './index.css'
import open from '../img/open.png'
import close from '../img/close.png'

export const Menu = ({ isOpen }) => {
    return (
        <button className="menu">
            {isOpen ? (<img src={open} alt="" />) : (<img src={close} alt="" />)}
        </button>
    );
};