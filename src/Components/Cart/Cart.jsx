import React from 'react';


const Cart = (props) => {
    const {read} = props;
    
    return (
        <div>
            <div>
           <h1>Spent time on read : {} min</h1>
            </div>
             <div className='py-5'>
             <h1>Bookmarked Blogs : {read.length} </h1>
             </div>
        </div>
    );
};

export default Cart;