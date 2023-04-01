import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import logo from '../images/logo.jpg';


const Detail = (props) => {
    const {author, title,cover} = props.detail;
      const handleRead = props.handleRead;
     
      
      const hendleAddToBook = (detail) => {
        console.log(detail);
      }
  
   
     
   

    return (
         <div className='ms-5 rounded-lg'>
        <div className="card w-100 bg-base-100 shadow-xl">
        <figure><img src={cover} alt="" /></figure>
        <div className="card-body ">
        {/* about author */}
        <div className='flex'>
         <img className='w-10 rounded-full' src={logo} alt="" />
         <div className='w-3/4 ms-5'>
         <h2>{author}</h2>
         <p>Mar 14 (4 Days ago)</p>
        
         </div>
         <p>05 min read <small onClick={()=> hendleAddToBook(props.detail)} ><FontAwesomeIcon icon={faBookmark} /></small>
          </p>
          </div>
          
          <p>{title}</p>
          <div>
          <p>#beginners  #programming</p>
          <div className='py-5'>
          <button onClick={()=> handleRead(props.detail)} className="btn btn-primary">Mark as read</button>
          </div>
        
            
          </div>
        </div>
        </div>
         </div>
        
        
        
    );
};

export default Detail;
