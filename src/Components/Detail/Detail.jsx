import React from 'react';


const Detail = (props) => {
    const {author, title,cover,img} = props.detail;
    return (
         <div className='ms-5'>
            <div className="card w-100 bg-base-100 shadow-xl">
        <figure><img src={cover} alt="" /></figure>
        <div className="card-body">
        {/* author about */}
        <h2>{author}</h2>
        <div className='flex'>
        <p>Mar 14 (4 Days ago)</p>
          <div>
            <p>05 min read</p>
          </div>
        </div>
          
          <p>{title}</p>
          <div className="card-actions justify-end">
            
          </div>
        </div>
      </div>
         </div>
        
        
        
    );
};

export default Detail;
