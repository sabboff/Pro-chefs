import React from 'react';

const Card = (props) => {
    console.log(props);
    const {card} = props;
    let total = 0;
    for(const detail of card){
        total = total + detail.salary;
    }
    return (
        <div>
            <h2>Order Summary: </h2>
                <h4>Items ordered: {card.length} </h4>
                <br />
                <h3>Total: {total}</h3>
        </div>
    );
};

export default Card;