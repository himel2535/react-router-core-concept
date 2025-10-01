import React, { Suspense, useState } from 'react';
import './user.css'
import { Link, Navigate, useLocation } from 'react-router';
import UserInfo from '../UserInfo/UserInfo';

const User = ({user}) => {

    const{id,name,email,phone}=user

    const infoPromise=fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res=>res.json())

    const [showInfo,setShowInfo]=useState(false)

    const [visitHome,setVisitHome]=useState(false)

    const location=useLocation();
    console.log(location)

    if(visitHome){
        return <Navigate to="/"></Navigate>
    };
    
    return (
        <div className='userStyle '>
            {/* <h1>{id}</h1> */}
            <h3>{name}</h3>
            <p>{email}</p>
            <h6><small>{phone}</small></h6>
            
            <Link to={`/users/${id}`}>Show details</Link>
            <button onClick={()=>{setShowInfo(!showInfo)}}>{showInfo?'Hide':'Show'} info</button>

            {
                showInfo && <Suspense fallback="info loading">
                    <UserInfo infoPromise={infoPromise}></UserInfo>
                </Suspense>
            }
            <button onClick={()=>setVisitHome(true)}>Visit Home</button>

        </div>
    );
};

export default User;