import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const LogIn = () => {
  const {signIn} = useContext(AuthContext);

  const handleLogIn = event => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email, password);
    signIn(email, password)
    .then(data =>{
      const loggedUser = data.user;
      console.log(loggedUser);
    })
    .then(error =>{
      console.log(error);
    })
  }
      return (
            <div className='my-12'>
<form onSubmit={handleLogIn} className="card-body w-80 mx-auto bg-slate-300">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
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
          Frist time in this site? please <Link className=' text-red-400' to='/register'> Register
            </Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Login</button>
        </div>
      </form>
            </div>
      );
};

export default LogIn;