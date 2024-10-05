import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { saveStoredRead } from "../../utility/localStorage";
import { saveStoredWish } from "../../utility/wishLocalStorage";




const BookDetails = () => {

    const books = useLoaderData();
    let { id } = useParams();
    const [isAdded, setIsAdded] = useState(false);
    const [isAdded1, setIsAdded1] = useState(false);
    const handleBtnClick = () => {

        if (!isAdded) {
            saveStoredRead(id);
            toast.success('Successfully Added');
            setIsAdded(true);
        } else {
            toast.error('Already added!')
        }
    }
    const handleBtnClick1 = () => {
        if (!isAdded1 && !isAdded) {
            saveStoredWish(id);
            toast.success('Successfully Added to Wishlist');
            setIsAdded1(true);
        } else {
            toast.error('Already added to read or wishlist!')
        }
    }

    const book = books.find(book => book.bookId == id)
    const { image, author, bookName, category, rating, review, tags, totalPages, yearOfPublishing, publisher } = book;






    return (
        <div className="flex gap-10">
            <div className="bg-[#1313130D] w-[580px] h-[700px] items-center flex justify-center rounded-3xl" >
                <img className="w-[425px] h-[585px] rounded-2xl" src={image} alt="" />
            </div>
            <div>
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold">{bookName}</h1>
                    <p className="text-xl font-medium">By: {author}</p>
                    <hr />
                </div>
                <div className="text-xl font-medium space-y-4 mt-4">
                    <p>{category}</p>
                    <hr />
                </div>
                <div className="space-y-5 mt-4">
                    <p className="text-[#131313B3]">
                        <span className="font-bold">Review: </span>
                        {review}
                    </p>
                    <div className="flex items-center space-x-4">
                        <h1 className="font-bold">Tag</h1>
                        <div className='bg-[#23BE0A0D] p-2 px-4 text-green-500 rounded-full'>{tags[0]}</div>
                        <div className='bg-[#23BE0A0D] p-2 px-4 text-green-500 rounded-full'>{tags[1]}</div>

                    </div>
                    <hr />

                </div>
                <div className="space-y-8 mt-6">
                    <div className="flex justify-between w-1/3">
                        <div className="space-y-4">
                            <p ><span className="text-[#131313B3]">Number of Pages:</span> </p>
                            <p ><span className="text-[#131313B3]">Publisher:</span> </p>
                            <p ><span className="text-[#131313B3]">Year of Publishing:</span> </p>
                            <p ><span className="text-[#131313B3]">Rating:</span> </p>
                        </div>
                        <div className="space-y-4">
                            <p className="font-semibold">{totalPages}</p>
                            <p className="font-semibold">{publisher}</p>
                            <p className="font-semibold">{yearOfPublishing}</p>
                            <p className="font-semibold">{rating}</p>
                        </div>
                    </div>
                    <div className="space-x-6 flex">
                        <div>
                            <button className="text-black bg-white btn" onClick={handleBtnClick}>Read</button>
                            <ToastContainer></ToastContainer>
                        </div>
                        <div>
                            <button onClick={handleBtnClick1} className="bg-[#50B1C9] btn text-white">Wishlist</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BookDetails;