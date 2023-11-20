import React, { useEffect, useState } from 'react';

const useChefs = () => {
      const [chefs, setChefs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setChefs(data);
                setLoading(false);
            });
    }, [])
    return [chefs, loading]
};


export default useChefs;