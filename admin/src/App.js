import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Main from './Components/main'
import Cart from './Components/Cart'

const App = () => {
  const [cart , setcart]=useState([])
  const [showcart , setshowcart]=useState(true)
  const [warning , setwarning]=useState(false)

  const handleitem = (item) =>{
      let isavilable = false;
      cart.forEach((product)=>{
        if(item.id===product.id)
          isavilable=true;
      })
      if(isavilable){
        setwarning(true)
        setTimeout(() => {
          setwarning(false)
        }, 2000);
        return;
      }
      setcart([...cart,item])
  }
  const handlechange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) 
        ind = index;
    });

    const temarr = cart;
    temarr[ind].amount += d;
    setcart([...temarr]);
  };

  return (
    <div>
        <Navbar setshowcart={setshowcart} size={cart.length}/>
        {showcart===false?
        <Cart cart={cart} setcart={setcart} handlechannge={handlechange}/>:
        <Main handleitem={handleitem}/>}
        
        {warning && (
          <h1>item is already added to card</h1>
      )}
    </div>
  )
}

export default App