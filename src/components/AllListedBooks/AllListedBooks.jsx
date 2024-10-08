import { GoPeople } from "react-icons/go";
import { IoDocumentOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import PropTypes from 'prop-types';
import './AllListedBooks.css'
import { Link } from "react-router-dom";

const AllListedBooks = ({ book }) => {
    const { bookId, image, author, bookName, category, rating, tags, totalPages, yearOfPublishing, publisher } = book;
    return (
        <div className="border rounded-3xl">
            <div className="card card-side bg-base-100 shadow-xl p-5 flex flex-col lg:flex-row">
                <div>
                    <figure>
                        <img
                            src={image}
                            className="w-[250px] h-[250px] rounded-3xl"
                            alt="Movie" />
                    </figure>
                </div>
                <div>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold playfair-display-font">{bookName}</h2>
                        <p className="font-medium work-sans-font1">By: {author}</p>
                        <div className="flex flex-col lg:flex-row items-center space-x-4 space-y-2 lg:space-y-0">
                            <h1 className="font-bold">Tag</h1>
                            <div className='bg-[#23BE0A0D] p-2 px-4 text-green-500 rounded-full work-sans-font'>#{tags[0]}</div>
                            <div className='bg-[#23BE0A0D] p-2 px-4 text-green-500 rounded-full work-sans-font'>#{tags[1]}</div>
                            <div className="flex gap-2 items-center text-[#131313CC] work-sans-font">
                                <h1><CiLocationOn /></h1>
                                <h1>Year of Publishing: {yearOfPublishing}</h1>
                            </div>
                        </div>
                        <div className="flex gap-6 work-sans-font flex-col lg:flex-row">
                            <div className="flex gap-2 items-center">
                                <h1><GoPeople /></h1>
                                <h1>Publisher: {publisher}</h1>
                            </div>
                            <div className="flex gap-2 items-center">
                                <h1><IoDocumentOutline /></h1>
                                <h1>Page: {totalPages}</h1>
                            </div>

                        </div>
                        <hr />
                        <div className="flex gap-5 work-sans-font">
                            <div className="bg-[#328EFF26] lg:p-3 rounded-full text-[#328EFF] lg:px-4 flex items-center text-center">
                                Category: {category}
                            </div>
                            <div className="bg-[#FFAC3326] lg:p-3 rounded-full text-[#FFAC33] lg:px-4 flex items-center text-center" >
                                Rating: {rating}
                            </div>
                            <Link to={`/bookdetails/${bookId}`}>
                                <div className="bg-green-500 lg:p-3 rounded-full text-white lg:px-4 flex items-center text-center" >
                                    View Detail
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

AllListedBooks.propTypes = {
    book: PropTypes.object.isRequired,
}

export default AllListedBooks;