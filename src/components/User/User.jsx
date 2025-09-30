import React from 'react';
import './user.css'
import { Link } from 'react-router';

const User = ({user}) => {

    const{id,name,email,phone}=user
    
    return (
        <div className='userStyle '>
            {/* <h1>{id}</h1> */}
            <h3>{name}</h3>
            <p>{email}</p>
            <h6><small>{phone}</small></h6>
            
            <Link to={`/users/${id}`}>Show details</Link>

        </div>
    );
};

export default User;