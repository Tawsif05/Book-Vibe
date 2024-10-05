import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen gap-5">
            <h1 className="text-3xl ">Something wrong !!!</h1>
            <Link to="/">
                <button className="btn btn-primary">Go Back</button>
            </Link>
        </div>
    );
};

export default ErrorPage;