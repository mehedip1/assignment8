import React from 'react';
import { useEffect ,useState } from 'react';
import Detail from '../Detail/Detail';
import Cart from '../Cart/Cart';



const Body = () => {
    const [details, setDetails] = useState([]);
    const [read, setRead] = useState([])

    useEffect(()=>{
        fetch('details.json')
        .then(res => res.json())
        .then(data => setDetails(data))
    },[]);

    const handleRead = (detail) =>{
        const newRead = [...read, detail];
        setRead(newRead);
    }
    return (
        <div className='flex '>
            <div className="main">
              {
                details.map( detail => <Detail
                key={detail.id}
                detail ={detail}
                handleRead={handleRead}
                ></Detail>
                 )
              }
            </div>
            <div className="shadow-lg rounded w-2/4 ms-5 px-5 ">
            <Cart read={read}></Cart>
               </div>
        </div>
    );
};

export default Body;