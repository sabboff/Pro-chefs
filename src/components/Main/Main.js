import React from 'react';
import { useEffect, useState } from 'react';
import Chef from '../Chef/Chef';
import './Main.css'
import '../Bootstrap/bootstrap.min.css'
import Card from '../Card/Card';

const Main = () => {
    const [chefBlogs, setchefBlogs] = useState([]);
    const [card, setCard] = useState([]);

    useEffect(() => {
        fetch('./fakeData.JSON')
        .then(res => res.json())
        .then(data => setchefBlogs(data))
    }, [])

    const handleAddToCard = (chefBlogs) =>{
        const newCard = [...card, chefBlogs];
        setCard(newCard);
    }
    return (
        <div>
            <div className='main-width '>

                    {/* chefs description  */}
                    <div className="row g-3">
                    
                    {
                        chefBlogs.map(chef => <Chef
                            key = {chef.name}
                            chef = {chef}
                            handleAddtoCard = {handleAddToCard}
                            ></Chef>)
                    }
                    </div>
        
                    {/* card  */}
                    
                    <div>
                        <Card card = {card}></Card>
                    </div>
                

        </div>

        </div>
        
    );
};

export default Main;