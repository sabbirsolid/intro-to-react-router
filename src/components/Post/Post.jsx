import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const navigate = useNavigate()
    const userStyle = {
        marginRight: "20px",
        padding: "5px",
        border: "2px solid yellow",
        borderRadius: "23px"
    }
    const handleShowDetails = () => {
        navigate(`/posts/${post.id}`)
    }
    return (
        <div style={userStyle}>
            <h1>ID: {post.id}</h1>
            <p>{post.title}</p>
            <Link to={`/posts/${post.id}`}>Show Details</Link>
            <button onClick={handleShowDetails}>Show Details</button>
        </div>
    );
};

export default Post;