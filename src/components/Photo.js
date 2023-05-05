import React from 'react'

function Photo({img}) {

    return (
        <div className="Photo">
            <img src={img} alt="author" />
        </div>
    )
}

export default Photo
