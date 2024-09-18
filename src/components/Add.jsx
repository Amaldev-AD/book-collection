import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


const Add = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <div className='w-full flex flex-col justify-center items-center'>
        <div>
            <h1 className='text-5xl font-medium'>Add Book</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyw6GwqzXA9ynEQIGC-7lfybiS69P83S0Mz-SdsShXqMx3UWXIsX90MFo4knKpLOr5t3A&usqp=CAU"  alt="" />

           <div className='w-["500px"]'>
            <h4>Book Name:</h4>
            <input
                className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Name"
                required
                
              />
            <h4>Book Img Link:</h4>
            <input
                className="border border-gray-300 rounded-lg py-2 px-4 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Img Address"
                required
                
              />
              <h4>Author Name:</h4>
              <input
                className="border border-gray-300 rounded-lg py-2 px-4 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Author"
                required
                
              />
              <h4>Price</h4>
              <input
                className="border border-gray-300 rounded-lg py-2 px-4 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="number"
                placeholder="Price"
                required
                
              />
           </div>
        </div>
      </div>
      

      
    </>
  )
}

export default Add
