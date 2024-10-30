import { Link, useRouteError } from "react-router-dom";


const Error = () => {
    const error = useRouteError()
    return (
        <div>
            <h1>Oops</h1>
            <p>{error.statusText || error.message}</p>
            <p>{error.status === 404 && <div>
                <h1>404</h1>
                <Link to={'/'} >Go Back</Link>
                </div>}</p>
        </div>
    );
};

export default Error;