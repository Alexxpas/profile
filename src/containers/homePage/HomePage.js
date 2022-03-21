import React, { useState, useEffect } from "react";
import "./homePage.css";

export const HomePage = () => {


    return (
        <div>
            <div className="gridWrap">
                <section className="gridItem1">
                    <h1>Hi there</h1>
                    <h2>Feel free to roam around, I am working on getting some fun stuff up</h2>
                    <p>:)</p>
                    <p>Are you hiring? Check out my <a href="./profile">profile</a> page</p>
                </section>
                <section className="gridItem2">
                    <figure>
                        <img src={process.env.PUBLIC_URL + '/media/profile-stock.jpg'} />
                    </figure>
                    {/* <img src={window.location.origin + '/profile-stock.jpg'} /> */}
                </section>
                <section className="gridItem3"></section>
                <section className="gridItem4"></section>

            </div>
        </div >
    );
};
