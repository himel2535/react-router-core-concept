import React, { use } from 'react';

const Users2 = ({usersPromise}) => {
    const users=use(usersPromise)
    console.log(users)
    return (
        <div>
            This is user2 data page
        </div>
    );
};

export default Users2;