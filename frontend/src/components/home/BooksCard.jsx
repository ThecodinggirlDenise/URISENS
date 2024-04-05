/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import { BiShow } from 'react-icons/bi';
import BookSingleCard from './BookSingleCard';

const BooksCard = ({ books }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  // Function to handle opening the book details modal
  const handleShowBookDetails = (book) => {
    setSelectedBook(book);
  };

  // Function to handle deleting a book
  const handleDeleteBook = (bookId) => {
    // Implement delete functionality here
    console.log(`Deleting book with ID: ${bookId}`);
  };

  return (
    <div className=''>
      {books.map((item) => (
        <div key={item._id} className="book-box">
          <div className="book-content">
            <p style={{ fontSize: '33px' }}>Patient Name</p>
            <p>Position: {item.title}</p>
            <p>Room Temperature: {item.author}</p>
            <p>Other Temperature: {item.publishYear}</p>
          </div>
          {/* Icons for edit, info, and delete */}
          <div className="icon-container">


          </div>
        </div>
      ))}

    </div>
  );
};

export default BooksCard;
