import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user=useLoaderData()
    const {name,website}=user;
    // console.log(user)
    return (
        <div>
            <h3>{name}</h3>
            <p>{website}</p>
        </div>
    );
};

export default UserDetails;