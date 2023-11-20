import React  from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Recipes from './Recipes';


const SingleChef = () => {

const chefs = useLoaderData();
console.log(chefs);
const {id, name, image,experience,num_recipes,bio, recipes} = chefs;

const recipe = recipes.map(recipe => <Link to='/recipes' className='text-xl font-bold text-green-700 mx-4 border-2 border-red-500'>{recipe.name}</Link>
  );

      return (
        <div>
          <div className="card card-side bg-base-100 shadow-xl">
        <figure><img src={image} alt="Movie"/></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{bio}</p>
          <div className='flex gap-4 m-4'><h1>Racipes Name{recipe}</h1></div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
      <Recipes></Recipes>
        </div>
      );
};

export default SingleChef;