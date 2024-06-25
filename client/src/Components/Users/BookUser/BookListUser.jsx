import React from 'react';
import { useGlobalContext } from '../../../context.'; // Ensure this path is correct
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import BookUser from '../../Users/BookUser/BookUser'; // Ensure this path is correct
import Loading from '../../../Components/Users/Loader/Loader'; // Ensure this path is correct
import coverImg from '../../../images/cover_not_found.jpg';
import SearchFrmUser from '../SearchFrmUser/SearchFrmUser'; // Corrected path to SearchFrmUser

import './BookListUser.css';

const BookListUser = () => {
  const { books, loading, resultTitle } = useGlobalContext();

  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      id: (singleBook.id).replace("/works/", ""),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
    };
  });

  if (loading) return <Loading />;

  return (
    <section className='book-details'>
      <div className='container'>
        <Link to="/HomeUser" className='flex flex-c back-btn'>
          <FaArrowLeft size={22} />
          <span className='fs-18 fw-6'>Retour à l'accueil</span>
        </Link>
        <SearchFrmUser /> 

        <section className='booklist'>
          <div className='container'>
            <div className='section-title'>
              <h2>{resultTitle}</h2>
            </div>
            <div className='booklist-content grid'>
              {
                booksWithCovers.slice(0, 50).map((item, index) => {
                  return (
                    <BookUser key={index} {...item} />
                  );
                })
              }
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default BookListUser;
