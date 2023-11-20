import React from 'react';
import img from "../../assets/chefs logo-2.png"

const Header = () => {
      return (
            <div className='border-b bg-gray-200 opacity-80'>
                  <img src={img} alt="header image" className='w-72 mx-auto my-2'  />
            </div>
      );
};

export default Header;