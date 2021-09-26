import React from 'react';
import '../Bootstrap/bootstrap.min.css'
import './Card.css'

const Card = (props) => {
    const {card} = props;
    let total = 0;
    let chef = '' ;
    for(const detail of card){
        total = total + detail.salary;
        if(!chef){
            chef = chef + detail.name + ' ,';
        }
        else{
            chef = chef + detail.name + ' ,';
        }
        
        
    }
    return (
        <div className='border mx-3 p-2 rounded-3 bg-light'>
            <h2>Customer acceptance </h2>
            <br />
                <h6>Hired: {card.length} </h6>
                <p><span id='chef-name'>Chef Names:</span> <br /> {chef} </p>
                <br />
                <h3>Agreement: {total}</h3>
        </div>
    );
};

export default Card;