import React from 'react';


const Cart = (props) => {
    const {read} = props;
   
   
    
    
    return (
        <div>
            <div>
           <h1 className="bg-green-300 h-15 shadow shadow-blue-500/40 hover:shadow-indigo-500/40 text-center">Spent time on read : {}min</h1>
            </div>
             <div className='py-5'>
          <h1 className='bg-sky-100'>Bookmarked Blogs : {read.  length} </h1>
         
         
            
             </div>
        </div>
    );
};

export default Cart;