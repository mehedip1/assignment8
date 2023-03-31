import React from 'react';

const Detail = (props) => {
    const {author, cover,img} = props.detail;
    return (
        <div>
        <img className='w-15 center ms-5 py-5' src={cover} alt="" />
           <h2>Name:{author}</h2>
         </div>
    );
};

export default Detail;