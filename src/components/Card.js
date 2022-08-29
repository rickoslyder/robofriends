import React from "react";
// import { Component } from "react";

// class Card extends Component {
//     render() {
//         return (<h1>Wag1 fam</h1>)
//     }
// }

const Card = ({ name, email, id }) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt="roboimage"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card
