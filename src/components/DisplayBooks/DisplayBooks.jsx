import { useEffect, useState } from "react";
import BooksCards from "../BooksCard/BooksCards";
import { Link } from "react-router-dom";
import "./DisplayBooks.css"
const DisplayBooks = () => {

    const [books, setBooks] = useState([]);


    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, []);

    


    return (

        <div className="mt-[100px]">
            <h1 className="text-4xl font-bold text-center mb-9 playfair-display-font">Books</h1>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                {
                    books?.map((book) => (<Link key={book.bookId} to={`/bookdetails/${book.bookId}`}>
                        <BooksCards
                        book={book}
                        ></BooksCards>
                    </Link>

                    ))
                }
            </div>

        </div>
    );
};

export default DisplayBooks;