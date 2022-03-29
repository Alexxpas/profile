import React, { useState, useEffect } from "react";
import websiteTileObject from '../../websiteInfo.js';

import "./profilePage.css";

// export const ProfilePage = () => {

//     console.log(websiteTileObject);

//     componentDidMount() {
//         console.log('mount workd');
//         document.body.style.overflowY = "scrollable";
//     }

//     componentWillUnmount() {
//         document.body.style.overflowY = "unset";
//     }

//     return (
//         <div>
//             <section className="introduction">
//                 <h1>Funky Websites ;)</h1>
//                 <div className="websiteTileWrap">
//                     {websiteTileObject.data.map(site => {
//                         return (
//                             <a href={site.url} target="_blank" className="websiteTile">
//                                 <h3>{site.name}</h3>
//                                 <p>{site.text}</p>
//                                 <img src={process.env.PUBLIC_URL + site.image} />
//                             </a>
//                         )
//                     })}
//                 </div>
//             </section >
//         </div >
//     );
// };

export class ProfilePage extends React.Component {
    // console.log(websiteTileObject);

    componentDidMount() {
        console.log('mount workd');
        document.body.style.overflowY = "scroll";
    }

    componentWillUnmount() {
        document.body.style.overflowY = "hidden";
    }

    render() {
        return (
            <div>
                <section className="introduction">
                    <h1>Funky Websites ;)</h1>
                    <div className="websiteTileWrap">
                        {websiteTileObject.data.map(site => {
                            return (
                                <a href={site.url} target="_blank" className="websiteTile">
                                    <h3>{site.name}</h3>
                                    <p>{site.text}</p>
                                    <img src={process.env.PUBLIC_URL + site.image} />
                                </a>
                            )
                        })}
                    </div>
                </section >
            </div >
        )
    }
}

// export default ProfilePage;