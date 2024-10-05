import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredRead } from "../../utility/localStorage";
import { getStoredWish } from "../../utility/wishLocalStorage";
import AllListedBooks from "../AllListedBooks/AllListedBooks";

const ListedBooks = () => {
    const books = useLoaderData();
    const [activeTab, setActiveTab] = useState('something'); // State for active tab
    const [arrOfReadBooks, setArrOfReadBooks] = useState([]);
    const [arrOfListBooks, setArrOfListBooks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(''); // State for selected category
    const [filteredBooks, setFilteredBooks] = useState([]); // To store filtered books

    useEffect(() => {
        const storedBooksIds = getStoredRead();
        const readBooks = storedBooksIds.map(id => books.find(book => book.bookId == id)).filter(book => book);
        setArrOfReadBooks(readBooks);

        const storedlistedBooksIds = getStoredWish();
        const wishlistedBooks = storedlistedBooksIds.map(id => books.find(book => book.bookId == id)).filter(book => book);
        setArrOfListBooks(wishlistedBooks);

        
        setFilteredBooks(activeTab === 'something' ? readBooks : wishlistedBooks);
    }, [books, activeTab]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setSelectedCategory(''); 
    };

    const handleCategoryChange = (event) => {
        const category = event.target.value;
        setSelectedCategory(category);

        const booksToFilter = activeTab === 'something' ? arrOfReadBooks : arrOfListBooks;

        if (category) {
            const filtered = booksToFilter.filter(book => book.category === category);
            setFilteredBooks(filtered);
        } else {
            setFilteredBooks(booksToFilter);
        }
    };

    
    const categories = [...new Set(books.map(book => book.category))];

    return (
        <div>
            <h1 className="h-24 bg-[#1313130D] text-black text-3xl font-bold rounded-3xl flex items-center justify-center">Books</h1>
            <div className="mt-8 flex justify-center">
                <select className="text-white bg-green-500 btn" onChange={handleCategoryChange} value={selectedCategory}>
                    <option className="" value="">Sort By</option>
                    {categories.map(category => (
                        <option className="bg-white text-black" key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>
            <div className="grid mt-5">
                <div className="tabs flex justify-start">
                    <button
                        className={`tab ${activeTab === 'something' ? 'border-2 border-b-0 border-blue-500 rounded text-xl' : 'border-blue-500 border-b-2 text-xl'}`}
                        onClick={() => handleTabClick('something')}
                    >
                        Read Books
                    </button>
                    <button
                        className={`tab ${activeTab === 'wishlist' ? 'border-2 border-b-0 border-blue-500 rounded text-xl' : 'border-b-2 border-blue-500 text-xl'}`}
                        onClick={() => handleTabClick('wishlist')}
                    >
                        Wishlist Books
                    </button>
                    <div className="border-b-2 flex-grow border-blue-500"></div>
                </div>
                <div className="mt-8">
                    {(activeTab === 'something' ? arrOfReadBooks : arrOfListBooks).length > 0 ? (
                        <div className="space-y-8">
                            {filteredBooks.map(book => (
                                <AllListedBooks book={book} key={book.bookId}></AllListedBooks>
                            ))}
                        </div>
                    ) : (
                        <p>No books available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;
