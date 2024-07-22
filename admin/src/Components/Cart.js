import React, { useState , useEffect } from 'react'

const Cart = ({cart,setcart,handlechannge}) => {

    const [price, setPrice] = useState(0)

    const handleprice = () => {
    let ans = 0;
    cart.map((item) => {
      ans += item.amount * item.price;
    });
    setPrice(ans);
  };
  const remove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setcart(arr);
  };
  useEffect(() => {
    handleprice();
  });

  return (
    <div>
        <h1 style={{textAlign:"center", backgroundColor:"black", color:"white"}}>My Cart Items</h1>
        {cart.map((item)=>(
            <>  
                <section className='cards'>
            <div className='card'>
                <span>Name: <strong className='brand'>{item.title}</strong></span>
                <div className='imageBox'>
                    <img src={item.img} alt="image"/>
                </div>
                <div>Size : {item.size}</div>
                <div>Price : <strong>{item.price}</strong></div>
                <button className='button' onClick={()=>handlechannge(item,-1)}>-</button><strong>{item.amount}</strong><button onClick={()=>handlechannge(item,1)} className='button'>+</button>
                <div>
                <button onClick={()=>remove(item.id)} className='button'>Delete</button>
            </div>
            </div>
        </section>
            </>
        ))}
            <div style={{textAlign:"center"}}>
        <span>Total Price of your Cart</span>

        <span>Rs - <strong>{price}</strong></span>
            </div>
            <hr/>
    </div>
  )
}

export default Cart