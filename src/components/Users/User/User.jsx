
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
const User = ({user}) => {
    // console.log(user);
    const {name, phone,id} = user;
    const userStyle = {
        marginRight: "20px",
        padding: "5px",
        border: "2px solid yellow",
        borderRadius: "23px"
    }
        return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>{phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};
User.propTypes = {
    user: PropTypes.object
}
export default User;