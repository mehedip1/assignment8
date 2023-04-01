import React, { useState } from 'react';
import Detail from '../Detail/Detail';

const Book = () => {
   const [data, setData] = useState([]);
   const handleAddToBook = () =>();

    return (
        <div>
            {
             data.map(detail => <Detail name={setData[id]}></Detail>) 
            }
           
        </div>
    );
};

export default Book;