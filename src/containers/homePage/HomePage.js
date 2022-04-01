// import React, { useState, useEffect, useDebugValue } from "react";
import React, { useState, useEffect } from "react";
import "./homePage.css";
import { CSSTransition } from "react-transition-group";
// import { Transition } from "react-transition-group";


export const HomePage = () => {

    const [pageLoaded, setPageLoaded] = useState(false);


    useEffect(() => {
        setPageLoaded(true);
    });

    return (
        <div>
            <div className="gridWrap">
                <section className="gridItem1">
                    {/* <h1 onClick={() => setShowMessage(true)} >Hi there</h1> */}
                    <h1>Hi there</h1>
                    <h2>Feel free to roam around, I am working on getting some fun stuff up</h2>
                    <p>:)</p>
                    {/* <p onClick={() => setShowMessage(false)} >Are you hiring? Check out my <a href="./profile">profile</a> page</p> */}
                    <p>Are you hiring? Check out my <a href="./profile">profile</a> page</p>
                </section>
                <section className="gridItem2">
                    <figure>
                        {/* <img src={process.env.PUBLIC_URL + '/media/profile-pic.jpg'} alt="profile of me" /> */}
                    </figure>
                    {/* <img src={window.location.origin + '/profile-stock.jpg'} /> */}
                </section>

                <section className="gridItem3">

                    <CSSTransition in={pageLoaded}
                        timeout={12000}
                        classNames="sunset-fade"
                    >
                        <div key="transition-group-content">
                            <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg"  >
                                <circle cx="150" cy="150" r="150" fill="white" />
                                <line x1="12" y1="213" x2="288" y2="213" stroke="black" stroke-width="4" />
                                <line x1="30.0084" y1="244" x2="268.008" y2="244.996" stroke="black" stroke-width="4" />
                                <line x1="67" y1="278" x2="231" y2="278" stroke="black" stroke-width="4" />
                                <line y1="166" x2="300" y2="166" stroke="black" stroke-width="10" />
                                <line x1="5.01394" y1="194" x2="295.014" y2="195.01" stroke="black" stroke-width="8" />
                            </svg>
                        </div>
                    </CSSTransition>
                    <div>
                        <span className="horizontal-line1"></span>
                        <span className="horizontal-line2"></span>
                        <span className="horizontal-line3"></span>
                        <span className="vertical-line1"></span>
                        <span className="vertical-line2"></span>
                        <span className="vertical-line3"></span>
                        <span className="vertical-line4"></span>
                        <span className="vertical-line5"></span>
                        <span className="vertical-line6"></span>
                    </div>


                </section>

                <section className="gridItem4"></section>


            </div>
        </div >
    );
};
