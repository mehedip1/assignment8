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
        <div className='flex '>
            <div className="main">
              {
                details.map( detail => <Detail
                key={detail.id}
                detail ={detail}
                ></Detail>
                 )
              }
            </div>
            <div className="shadow-lg w-2/4 ms-5 px-5 ">
               <h1>Bookmarked Blogs : 8</h1>
               <h1>Hello</h1>
            </div>
        </div>
    );
};

export default Body;