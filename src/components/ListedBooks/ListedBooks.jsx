import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredRead } from "../../utility/localStorage";
import { getStoredWish } from "../../utility/wishLocalStorage";
import AllListedBooks from "../AllListedBooks/AllListedBooks";

const ListedBooks = () => {
    const books = useLoaderData();
    const [activeTab, setActiveTab] = useState('something');
    const [arrOfReadBooks, setArrOfReadBooks] = useState([]);
    const [arrOfListBooks, setArrOfListBooks] = useState([]);
    const [selectedSortCriterion, setSelectedSortCriterion] = useState('');
    const [filteredBooks, setFilteredBooks] = useState([]);

    useEffect(() => {
        const storedBooksIds = getStoredRead();
        const readBooks = storedBooksIds?.map(id => books?.find(book => book.bookId == id))?.filter(book => book);
        setArrOfReadBooks(readBooks);

        const storedListedBooksIds = getStoredWish();
        const wishlistedBooks = storedListedBooksIds?.map(id => books?.find(book => book.bookId == id))?.filter(book => book);
        setArrOfListBooks(wishlistedBooks);

        
        setFilteredBooks(activeTab === 'something' ? readBooks : wishlistedBooks);
    }, [books, activeTab]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setSelectedSortCriterion('');
    };

    const handleSortChange = (event) => {
        const criterion = event.target.value;
        setSelectedSortCriterion(criterion);
    
        const booksToSort = activeTab === 'something' ? arrOfReadBooks : arrOfListBooks;
    
        let sortedBooks;
        if (criterion) {
            sortedBooks = [...booksToSort].sort((a, b) => {
                switch (criterion) {
                    case 'rating':
                        return b.rating - a.rating; // Higher rating first
                    case 'pages':
                        return b.totalPages - a.totalPages; // More pages first
                    case 'year':
                        return b.yearOfPublishing - a.yearOfPublishing; // More recent year first
                    default:
                        return 0;
                }
            });
        } else {
            sortedBooks = booksToSort;
        }
    
        setFilteredBooks(sortedBooks);
    };
    


    const sortOptions = [
        { value: '', label: 'Sort By' },
        { value: 'rating', label: 'Rating' },
        { value: 'pages', label: 'Number of Pages' },
        { value: 'year', label: 'Publishing Year' },
    ];

    return (
        <div>
            <h1 className="h-24 bg-[#1313130D] text-black text-3xl font-bold rounded-3xl flex items-center justify-center">Books</h1>
            <div className="mt-8 flex justify-center">
                <select className="text-white bg-green-500 btn" onChange={handleSortChange} value={selectedSortCriterion}>
                    {sortOptions.map(option => (
                        <option className="bg-white text-black" key={option.value} value={option.value}>{option.label}</option>
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
                            {filteredBooks?.map(book => (
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
