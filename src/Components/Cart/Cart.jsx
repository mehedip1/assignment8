import React from 'react';



const Cart = ({read , detail}) => {
    
   
   
    
    
    return (
        <div>
            <div>
           <h1 className="bg-green-300 h-15 shadow shadow-blue-500/40 hover:shadow-indigo-500/40 text-center">Spent time on read : {read.length}min</h1>
            </div>
            <div className='py-5'>
            <h1 className='bg-sky-100'>Bookmarked Blogs :{detail}
           </h1>

           <p className='font-2xl'>Master Microsoft Power Platform and Become an In-Demand!</p>
         
         
           
         
            
             </div>
            
        </div>
    );
};

export default Cart;