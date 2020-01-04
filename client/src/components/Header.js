import React from 'react';

export const Header = () => {
  return (
    <div className='card bg-info text-center text-light rounded-0'>
      <h1 className='display-4'>
        <i className='fas fa-clipboard-list mr3'></i>
        <span className='text-dark ml-3'>MERN</span> Todo List
      </h1>
    </div>
  );
};
