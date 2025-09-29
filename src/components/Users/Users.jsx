
import { useLoaderData } from 'react-router';

const Users = () => {

    const users=useLoaderData();
    console.log(users)

    return (
        <div>
            This is users page
        </div>
    );
};

export default Users;