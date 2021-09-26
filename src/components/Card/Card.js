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
        <div className='border ms-5 p-5 rounded-3 bg-light shadow'>
            <h2>Customer acceptance </h2>
            <br />
                <h6>Hired: {card.length} </h6>
                <p><span id='chef-name'>Chef Names:</span> <br /> {chef} </p>
                <br />
                <h3>Agreement: {total}</h3>
                <button type="button" className="btn btn-danger">Confirm</button>
        </div>
    );
};

export default Card;