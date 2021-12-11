import React from 'react'

export const Card = (props) => {
    return (
        <div className="card card-ucamp">
            <div className="card-header card-header-ucamp">
                {props.title}
            </div>
            <div className="card-body">
                <img className="card-image" src= {props.url} alt="" />                
            </div>
        </div>
    )
}