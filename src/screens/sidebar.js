import React, { useState } from "react";

import {
    NavLink,    
} from "react-router-dom";


function Sidebar(){

    const [nav, setNav] = useState([
        {label: "Home", slug: "/", icon: "icon-home"},
        {label: "Discover", slug: "discover", icon: "icon-ul"},
        {label: "Categories", slug: "cates", icon: "icon-tag"},
        {label: "My Courses", slug: "my-courses", icon: "icon-briefcase"}
    ])
    const [currentPage, setCurrentPage] = useState("/");

    var navigation = [];
    for(let i = 0; i < nav.length; i++){
        navigation.push(
            <li key={"nav-" + i + "-" + nav[i].slug}>
                <NavLink to={nav[i].slug} className={"aic link noul flex c333"}>
                    <div className={"ico s20 " + nav[i].icon} />
                    <h2 className="lbl s20">{nav[i].label}</h2>
                </NavLink>
            </li>
        );
    }

    console.log(global.fire);

    return (
        <div className="sidebar rel">
            <a href="#" className="logo bl">
                <img src="data:image/png;base64,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" className="bl" />
            </a>

            <ul className="nav">
                {navigation}
            </ul>

            <div className="updated-course flex aic">
                <div className="icon-lamp-bright cfff s24 ico" />
                <div className="lbl s15 fontb c333">
                    Updated Courses
                    <h2 className="author s13 c777">by Shriyanshu Sinha</h2>
                </div>
            </div>

            <div className="stats aic flex">

                <div className="stats-box flex">
                    <div className="ico ico-points s24 icon-shield" />
                    <h2 className="val s15 c333 fontb">1800</h2>
                    <h2 className="lbl s13 c777">points</h2>
                </div>

                <div className="stats-box flex">
                    <div className="ico ico-battery s24 icon-battery-90" />
                    <h2 className="val s15 c333 fontb">45.3%</h2>
                    <h2 className="lbl s13 c777">complete</h2>
                </div>

            </div>


            <div className="me flex aic">
                {global.fire.ID ? <React.Fragment><div className="photo cfff s24">
                    <img src="http://placeimg.com/100/100/people" className="bl" />
                </div>
                <div className="lbl s15 fontb c333">
                    Kamran Wajdani   
                    <h2 className="uname s13 c777">@shriyanshuSinha</h2>                 
                </div>
                </React.Fragment>
                : 
                <NavLink to={"oauth"} className={"aic link noul flex c333"}>
                    <div className={"ico s24 rel cfff icon-portrait-male"} />
                    <h2 className="lbl s20 fontb">Sign in</h2>
                </NavLink>
                }
            </div>

        </div>
    )
}

export default Sidebar;