import { useLoaderData } from "react-router";

const UserDetails = () => {
    const userDetails = useLoaderData();
    const {name, username, email} = userDetails
    console.log(userDetails);
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl text-center">This is from userDetails</h1>
            <div className="mt-10 bg-amber-200 p-4 text-center rounded-xl">
                <h1 className="text-2xl font-bold"><small>Name:</small> {name}</h1>
                <h2 className="text-xl font-semibold"><small>NickName: </small>{username}</h2>
                <h2 className="text-xl font-semibold text-gray-500"><small>Email: </small>{email}</h2>
            </div>
        </div>
    );
};

export default UserDetails;