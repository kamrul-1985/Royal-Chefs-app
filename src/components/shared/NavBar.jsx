import React, { useContext, useState } from 'react';
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import {Link, NavLink} from "react-router-dom"
import { AuthContext } from '../Provider/AuthProvider';



const NavBar = () => {
      const [open, setOpen] = useState(false);
      const routers = [
            {
                  Id:1,
                  Name: 'Home',
                  Path:'/'

            },
            {
                  Id:2,
                  Name: 'About',
                  Path:'/about'
            },
            {
                  Id:3,
                  Name: 'Contact',
                  Path:'/contact'
            },
            {
                  Id:4,
                  Name: 'Gallery',
                  Path:'/gallery'
            },
            
      ];

      const {user,logOut} = useContext(AuthContext);
      const handleLogOut = () => {
            logOut()
            .then()
            .then(error =>{
                  console.log(error.message);
            })
      }

      
      return (
            <nav className='bg-gray-100 p-4'>
                  <div className='md:hidden' onClick={()=> setOpen(!open)}>
                        <span> 
                              {
                                    !open? <FaBars></FaBars>: <GrClose></GrClose>
                              }
                              </span>
                        
                  </div>
                  <ul className={`md:flex justify-center gap-12 items-center font-semibold absolute duration-500 md:static ${open? 'top-6': '-top-56'}  `}>
                        {
                              routers.map(route =>
                              <li key={route.Id}>
                                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to={route.Path}> {route.Name} </NavLink>
                              </li>)
                              
                        }
                  </ul>
                  <div>
                        {
                              user? <Link onClick={handleLogOut} ><button>LogOut</button></Link>: <Link to='/signIn'><button>LogIn</button></Link>
                        }
                  </div>
            </nav>
      
      );
};

export default NavBar;