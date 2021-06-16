import React from 'react';
import { NavLink } from "react-router-dom";

function Card(props) {
    return (
        <div>
            <div className="col-md-10 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top" alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.para}</p>
                        <NavLink to="#" className="btn btn-primary">Start</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;