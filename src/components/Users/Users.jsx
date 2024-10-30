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
            {/* <h3>Users: {users.length} </h3> */}
            {
                users.map(user => <User key={user.id} user={user} ></User>)
            }
        </div>
    );
};

export default Users;