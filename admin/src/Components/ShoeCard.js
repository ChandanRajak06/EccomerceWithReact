import React from 'react'
import './ShoeCard.css'

const ShoeCard = ({item , handleitem}) => { 
    const {id,title,amount,img,price,size}=item;
    
  return (
    
        <section className='cards'>
            <div className='card'>
                <span>Name: <strong className='brand'>{title}</strong></span>
                <div className='imageBox'>
                    <img src={img} alt="image"/>
                </div>
                <div>Size : {size}</div>
                <div>Price : <strong>{price}</strong></div>
                <button className='button' onClick={()=>handleitem(item)}>Add to Cart</button>
            </div>
        </section>
  )
}

export default ShoeCard