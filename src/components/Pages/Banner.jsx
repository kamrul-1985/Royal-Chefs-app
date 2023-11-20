import React from 'react';

const Banner = () => {
      return (
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/bb9qctn/istockphoto-1344979169-1024x1024.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Our Chef`s</h1>
      <p className="mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, est numquam. Asperiores, possimus corporis numquam modi ipsa illum voluptatibus est debitis, voluptatum quae esse provident dolore at dignissimos, ad eligendi.</p>
      <button className="btn btn-primary">Details</button>
    </div>
  </div>
</div>
      );
};

export default Banner;