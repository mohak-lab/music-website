import React from 'react';
import { NavLink } from "react-router-dom";

function Common(props) {
    return (
        <div>
            <section id="header">
                <div className="container-fluid nav_bg home_back">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 left_side">
                                    <h1><strong className="brand_name">{props.sname}</strong>{props.lname}</h1>
                                    <h2 className="my-3">
                                        I'm here to elobrate my all piano skills.
                                    </h2>
                                    <div className="mt-3">
                                        <NavLink to={props.visit} className="my_btn">{props.btnname}</NavLink>
                                    </div>
                                </div>

                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={props.imgsrc} className="img animated" alt="home img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Common; 