import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode, toggleLightMode } from '../features/modeSlice';

function UtilityBar() {
    const theme = useSelector((state) => state)
    const dispatch = useDispatch()

    const darkStyle = {
        backgroundColor: theme.color3,
        color: theme.color5,
        padding: '0.5rem 1rem',
        margin: '0.5rem',
        borderRadius: '1rem',
        border: '2px solid',
        borderColor: theme.color5 
    }

    const lightStyle = {
        backgroundColor: theme.color3,
        color: theme.color1,
        padding: '0.5rem 1rem',
        margin: '0.5rem',
        borderRadius: '1rem',
        border: '2px solid',
        borderColor: theme.color5 
    }

    const button = theme.darkMode ? <button style={darkStyle} onClick={() => dispatch(toggleLightMode())}>Light Mode</button> : <button style={lightStyle} onClick={() => dispatch(toggleDarkMode())}>Dark Mode</button>
    
    return (
        <div>
            {button}
        </div>
    )
}

export default UtilityBar