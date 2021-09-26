import React from 'react';
import './Chef.css'
import '../Bootstrap/bootstrap.min.css'

const Chef = (props) => {
    const {name, img, bio, salary, profile, location} = props.chef;
    return (
        <div className='col-12 col-lg-4 border p-3 rounded-3 bg-light'>
            <img className='my-1' src={img} height="150px" width="150px" alt="" />
            <h4>Name: {name}</h4>
            <small><span className='location'>Location: {location}</span></small>
            <p>{bio}</p>
            <h5>Asking Payment: <span style={{
                color:'purple'
            }}>{salary}</span></h5>
            <small id='anchor'>Click to visit Profile: <a href={profile} target='_blank'>{name}</a></small>
            <br />
            <button onClick = {() => props.handleAddtoCard(props.chef)} style={{
                marginTop: '10px'
            }} type="button" className="btn btn-secondary">Hire Now</button>
        </div>
    );
};

export default Chef;