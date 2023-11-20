import React from 'react';
import { Link } from 'react-router-dom';

const Chef = ({chef}) => {
      
      const {id, name, image,experience,num_recipes,bio} = chef;
      
      return (
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <p>{bio}</p>
              <div className="card-actions justify-end">
                <h1>{experience}</h1>
                <h1>{num_recipes}</h1>
                
                <Link to={`/chef/${id}`}> <button className="btn btn-primary">Details</button> </Link>
              </div>
            </div>
          </div>
      );
};

export default Chef;