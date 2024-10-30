

const User = ({user}) => {
    // console.log(user);
    const {name, phone} = user;
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
        </div>
    );
};

export default User;