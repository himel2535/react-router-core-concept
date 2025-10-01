import React, { use } from 'react';

const UserInfo = ({infoPromise}) => {

    const info=use(infoPromise)
    const {id,username,email}=info

    return (
        <div>
            <h4>{id}</h4>
            <h5>{username}</h5>
            <h6>{email}</h6>
        </div>
    );
};

export default UserInfo;