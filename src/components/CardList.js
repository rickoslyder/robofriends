import React from "react";
import Card from "./Card";

const CardList = ({source}) => {
    return (
        <div>
            {source.map(({id, name, email}, i) =>
            <Card
                key={id}
                id={id}
                name={name}
                email={email}
            />)}
        </div>
    )
}

export default CardList
