import { Link } from "react-router-dom";
import './Banner'

const Banner = () => {
    return (
        <div className="flex justify-around bg-[#1313130D] rounded-2xl mt-5">
            <div className="space-y-10 my-auto">
                <h1 className="text-6xl font-bold playfair-display-font">
                    Books to freshen <br />up your bookshelf
                </h1>
                <div>
                    <Link to="/listedbooks" >
                        <button className="btn btn-primary work-sans-font">
                            View The List
                        </button>
                    </Link>
                </div>
            </div>
            <div>
                <img src="../../../public/dragon book.webp" alt="" />
            </div>
        </div>
    );
};

export default Banner;