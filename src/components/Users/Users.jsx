import { useLoaderData } from "react-router-dom";
import User from "./User/User";

const Users = () => {
    const users = useLoaderData()
    const usersStyle = {
        display: "grid",
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: "10px"
    }
    return (
        <div style={usersStyle}>
            {
                users.map(user => <User key={user.id} user={user} ></User>)
            }
        </div>
    );
};

export default Users;