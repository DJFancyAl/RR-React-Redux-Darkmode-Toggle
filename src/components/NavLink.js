import React from 'react'
import { useSelector } from 'react-redux';

function NavLink(props) {
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
        <div className="NavLink" style={theme.darkMode ? darkStyle : lightStyle}>
            <p>{props.content}</p>
        </div>
    )
}

export default NavLink
