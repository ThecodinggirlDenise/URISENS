/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';
import { RiDashboardLine } from 'react-icons/ri';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { RiSettings2Line } from 'react-icons/ri';
import { AiFillHome } from "react-icons/ai";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='flex'>
      <div className="sidebar" style={{ backgroundColor: '#dcfcfc', width: '250px', padding: '20px', margin: '20px', borderRadius: '17px' }}>
        <h2 style={{ fontSize: '27px', alignItems: 'center', fontWeight: 'bold' }}>URISENS</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>
            <Link to="/dashboard" className="sidebar-link" style={{ fontSize: '23px' }}>
              <AiFillHome style={{ marginRight: '10px' }} /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/books/create" className="sidebar-link" style={{ fontSize: '23px' }}>
              <AiOutlineUserAdd style={{ marginRight: '10px' }} /> Add Patient
            </Link>
          </li>
          <li>
            <Link to="/settings" className="sidebar-link" style={{ fontSize: '23px' }}>
              <RiSettings2Line style={{ marginRight: '10px' }} /> Settings
            </Link>
          </li>
        </ul>
      </div>


      {/* Main content */}
      <div className='p-4 flex-1'>
        <div className='flex justify-between items-center'>
          <div className='flex'>
            <h1 className='text-5xl' style={{ fontWeight: 'bold', color: '#4BFFFB', position: 'relative' }}>Urisens</h1>
          </div>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className='px-8 py-1 rounded-xl border border-white-200 mr-3'
            />
            <div className='ml-9 '>
              <button className="p-2 border  border-sky-500 rounded-lg" style={{ fontSize: '16px', fontWeight: 'bold' }}>DR RAM</button>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', marginTop: '27px' }}>
          <div style={{ flex: 1, padding: 10, backgroundColor: '#4BFFFB', borderRadius: '10px' }}>
            <h2 style={{ color: 'blue', fontSize: '18px', fontWeight: 'bold' }}>Reminders</h2>
            <BooksTable books={books} />
          </div>
          <div style={{ flex: 1, padding: 10, backgroundColor: 'lightpink', borderRadius: '10px', marginLeft: '23px' }}>
            <h2 style={{ color: '#9F2B68', fontSize: '18px', fontWeight: 'bold' }}>Reminders</h2>
            <BooksTable books={books} />
          </div>
        </div>
        <div style={{ display: 'flex', marginTop: '24px' }}>
          <Link to='/books/create'></Link>
          <div style={{ flex: 1, padding: 10, borderRadius: '10px', border: '2px solid lightblue' }}>
            <h2 style={{ color: 'blue', fontSize: '18px', fontWeight: 'bold' }}>Dry</h2>
            <BooksCard books={books} /> {/* Move the "Hello" text inside the Dry box */}
          </div>
          <div style={{ flex: 1, padding: 10, borderRadius: '10px', border: '2px solid pink', marginLeft: '23px' }}>
            <h2 style={{ color: '#9F2B68', fontSize: '18px', fontWeight: 'bold' }}>Wet</h2>
            <BooksCard books={books} />   {/* Content for Wet box */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
