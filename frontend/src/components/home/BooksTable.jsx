/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'; // Import React
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
      <thead>
        <tr>

          <th className='border border-sky-900 rounded-md'>Room Number</th>
          <th className='border border-sky-900 rounded-md max-md:hidden'>
            Status
          </th>
          <th className='border border-sky-900 rounded-md max-md:hidden'>
            Date-Time
          </th>

        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className='h-8'>

            <td className='border border-slate-700 rounded-md text-center' style={{ backgroundColor: 'white' }}>
              {book.title}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden' style={{ backgroundColor: 'white' }}>
              {book.author}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              <div className='flex justify-center gap-x-4' style={{}}>

              </div>
            </td>

          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
