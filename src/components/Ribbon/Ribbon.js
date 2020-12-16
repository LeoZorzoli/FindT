import React from 'react';
import './Ribbon.scss'
import logo from '../../assets/logo.png'
import { Image } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Ribbon = () => {
    return (
        <NavLink fluid to="/">
            <div className="ribbon fluid">
                <span className="ribbon3">
                    <span className="ribbon2">
                        <Image className="logo" fluid src={logo} />
                    </span>
                </span>
            </div>
        </NavLink>
    )
}

export default Ribbon;