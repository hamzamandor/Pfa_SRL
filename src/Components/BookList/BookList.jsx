import React from 'react';
import { useGlobalContext } from '../../context.'; // Assurez-vous que ce chemin est correct
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Book from '../BookList/Book';
import Loading from '../Loader/Loader';
import coverImg from '../../images/cover_not_found.jpg';
import './BookList.css';

// https://covers.openlibrary.org/b/id/240727-S.jpg

const BookList = () => {
  const { books, loading, resultTitle } = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      // removing /works/ to get only id
      id: (singleBook.id).replace("/works/", ""),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
    };
  });

  if (loading) return <Loading />;

  return (
    <section className='book-details'>
      <div className='container'>
        <Link to="/" className='flex flex-c back-btn'>
          <FaArrowLeft size={22} />
          <span className='fs-18 fw-6'>Retour à l'accueil</span>
        </Link>
        <section className='booklist'>
          <div className='container'>
            <div className='section-title'>
              <h2>{resultTitle}</h2>
            </div>
            <div className='booklist-content grid'>
              {
                booksWithCovers.slice(0, 50).map((item, index) => {
                  return (
                    <Book key={index} {...item} />
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

export default BookList;
