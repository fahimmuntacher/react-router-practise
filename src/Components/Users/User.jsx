import { Link} from "react-router";
const User = ({user}) => {
    const {id ,name, username, email} = user;

    return (
        <>
        <div>
             <div className="border-2 bg-gray-200 text-center p-5 rounded-2xl flex flex-col justify-between h-full gap-2">
                <h1 className="font-bold text-2xl">{name}</h1>
                <h2 className="text-lg font-semibold">{username}</h2>
                <h2 className="text-xl font-bold">{email}</h2>
               <Link to= {`${id}`}>
               <button class="btn w-full bg-green-200 text-green-800 text-xl rounded-xl">Details</button>
               </Link>
            </div>
        </div>
        </>
    );
};

export default User;