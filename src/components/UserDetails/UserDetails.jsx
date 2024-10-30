import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const userDetails = useLoaderData()
    const {name, email, phone} = userDetails;  
    return (
        <div>
            <h1>Name: {name} </h1>
            <p>Phone: {phone} </p>
            <p>mali: {email}</p>
        </div>
    );
};

export default UserDetails;