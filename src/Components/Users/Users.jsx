
import { useLoaderData} from 'react-router';
import User from './User';

const Users = () => { 
    const users = useLoaderData();
    console.log(users);
    return (
        <>
         <h1 className='text-3xl text-center'>This is from user </h1>
         
        <div className='grid grid-cols-4 gap-3 max-w-[1280px] mx-auto mt-16'>
            
            {
                users.map(user => 
                <User user = {user}></User>)
            }
        </div>
        </>
    );
};

export default Users;