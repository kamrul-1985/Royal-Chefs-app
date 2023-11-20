import React, { useEffect, useState } from 'react';
import Chef from './Chef';
import useChefs from '../../hooks/useChefs';

const ChefCard = () => {
      // const [chefs, setChefs] = useState([]);

      // useEffect(()=>{
      //       fetch('../../../public/Chef.json')
      //       .then(res => res.json())
      //       .then(data => setChefs(data))
      // },[])
     const chefs = useChefs();
     
      return (

           <div className='grid md:grid-cols-3'>
            {
                  chefs[0]?.map(chef =><Chef
                  key={chef.id}
                  chef={chef}>      
                  </Chef>)
            }
           </div>  
      );
};

export default ChefCard;