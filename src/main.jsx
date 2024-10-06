import { StrictMode, } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';
import Home from './components/Home/Home.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import PagestoReadGraph from './components/PagestoReadGraph/PagestoReadGraph.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import BookClub from './components/BookClub/BookClub.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "/bookdetails/:id",
        loader: () => fetch("books.json"),
        element: <BookDetails ></BookDetails>
      },
      {
        path: '/listedbooks',
        element: <ListedBooks></ListedBooks>,
        loader: ()=> fetch('books.json')
      },
      {
        path: '/readingpagechart',
        element: <PagestoReadGraph></PagestoReadGraph>,
        loader: ()=> fetch("books.json")
      },
      {
        path: '/aboutus',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/bookclub',
        element: <BookClub></BookClub>,
        loader: ()=> fetch('booksclub.json')
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} />
  </StrictMode>,
)
