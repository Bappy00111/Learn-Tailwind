import React from 'react';

const Cart = () => {
  return (
    <div className='h-screen flex justify-center items-center bg-gray-100 '>
      <div className='max-w-sm mx-auto p-8 bg-white rounded-xl shadow-md  space-y-2'>
        <img className='h-24 mx-auto rounded-full ring-4 ring-green-500 transform hover:scale-105 duration-500' src="https://img.freepik.com/premium-photo/default-male-user-icon-blank-profile-image-green-background-profile-picture-icon_962764-98397.jpg" alt="" />
        <div className='text-center space-y-2'>
          <div className='text-base space-y-0.5'>
            <p className='text-lg font-bold text-black'>Learn with Bappy</p>
            <p className='text-gray-500 '>YouTube Channel</p>
          </div>
          <button className='font-bold border px-4 py-1 rounded-full text-purple-500 hover:text-white hover:bg-purple-500 hover:border-transparent  focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-4'>visit now</button>
        </div>
      </div>
      
    </div>
  );
};

export default Cart;