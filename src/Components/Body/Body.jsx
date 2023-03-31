import React from 'react';
import { useEffect ,useState } from 'react';
import Detail from '../Detail/Detail';


const Body = () => {
    const [details, setDetails] = useState([])

    useEffect(()=>{
        fetch('details.json')
        .then(res => res.json())
        .then(data => setDetails(data))
    },[])
    return (
        <div className='grid grid-cols-2	'>
            <div className="main row-span-2">
              {
                details.map( detail => <Detail
                key={detail.id}
                detail ={detail}
                ></Detail> )
              }
            </div>
            <div className="blog-box">
               <h1>About</h1>
            </div>
        </div>
    );
};

export default Body;