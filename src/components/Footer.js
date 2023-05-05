import React from 'react'
import { useSelector } from 'react-redux';

function Footer() {
    const theme = useSelector((state) => state)

    const style = {
        backgroundColor: theme.color1,
        color: theme.color4,
        padding: '1rem'
    }

    return (
        <div className="Footer" style={style}>
            <h3>Footer Content</h3>
        </div>
    )
}

export default Footer
