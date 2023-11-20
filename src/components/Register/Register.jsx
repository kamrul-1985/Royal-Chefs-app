import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
  const {createUser} = useContext(AuthContext);

  const handleSignIn = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo,email,password);
    createUser(email, password)
    .then(data => {
      console.log(data);
      const loggedUser = data.user;
    })
    .then(error => {
      console.log(error);
    })
  }

      return (
            <div>
                <form onSubmit={handleSignIn} className="card-body w-80 mx-auto bg-slate-300">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Your name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="Your email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" name='photo' placeholder="Photo Url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          <label className="label label-text-alt">
          Already have an account? please
            <Link to='/signIn' className='label-text-alt text-red-400'>LogIn</Link>
          </label>
        </div>
        <div className="form-control mt-6">
        <button type='submit' className="btn btn-primary">Register</button>
        
          
        </div>
      </form>  
            </div>
      );
};

export default Register;