import { useEffect, useState } from "react";
import BooksCards from "../BooksCard/BooksCards";
import { NavLink } from "react-router-dom";
const DisplayBooks = () => {

    const [books, setBooks] = useState([]);


    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, []);

    


    return (

        <div className="mt-[100px]">
            <h1 className="text-4xl font-bold text-center mb-9">Books</h1>

            <div className="grid grid-cols-3 gap-10">
                {
                    books.map((book) => (<NavLink key={book.bookId} to={`/bookdetails/${book.bookId}`}>
                        <BooksCards
                        book={book}
                        ></BooksCards>
                    </NavLink>

                    ))
                }
            </div>

        </div>
    );
};

export default DisplayBooks;