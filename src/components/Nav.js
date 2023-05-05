import React from 'react'
import NavLink from './NavLink'
import { useSelector } from 'react-redux';

function Nav() {
    const theme = useSelector((state) => state)

    const darkStyle = {
        backgroundColor: theme.color2,
        color: theme.color5,
    }

    const lightStyle = {
        backgroundColor: theme.color3,
        color: theme.color1,
    }

    return (
        <div className="Nav" style={theme.darkMode ? darkStyle : lightStyle}>
            <NavLink content="Blog" />
            <NavLink content="About Me" />
            <NavLink content="Projects" />
            <NavLink content="Other" />
        </div>
    )
}

export default Nav
