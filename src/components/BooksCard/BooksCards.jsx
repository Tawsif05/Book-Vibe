import PropTypes from 'prop-types';
import { FaRegStar } from "react-icons/fa";
import "./BooksCard.css"
const BooksCards = ({ book }) => {

    const { bookName, author, image, rating, category,tags } = book;

    return (
        <div className=''>
            <div className="card card-compact bg-base-100  shadow-xl h-[450px] p-4">
                <figure className=''>
                    <img
                        src={image}
                        alt="Shoes" className='object-cover w-full h-full' />
                </figure>
                <div className="card-body">
                    <div className='flex gap-5 work-sans-font1'>
                        <div className='bg-[#23BE0A0D] p-2 text-green-500 rounded-full'>{tags[0]}</div>
                        <div className='bg-[#23BE0A0D] p-2 text-green-500 rounded-full'>{tags[1]}</div>
                    </div>
                    <h2 className="card-title text-2xl playfair-display-font">{bookName}</h2>
                    <p className='font-medium work-sans-font'>By: {author}</p>
                    <div className='flex justify-between border-t-[1px] border-dashed pt-3 work-sans-font1'>
                        <div>{category}</div>
                        <div className='flex space-x-2'>
                            <p>{rating}</p>
                            <p><FaRegStar /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

BooksCards.propTypes = {
    book: PropTypes.object.isRequired,
}

export default BooksCards;