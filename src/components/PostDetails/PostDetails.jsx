import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const nav = useNavigate()
    const handleGoPrev = () => {
        nav(-1);
    }
    const details = useLoaderData()
    return (
        <div>
            <p>id: {details.id}</p>
            <p>{details.body}</p>
            <button onClick={handleGoPrev} >Go back</button>
        </div>
    );
};

export default PostDetails;