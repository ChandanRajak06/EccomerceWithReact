import React from 'react'
import './NavBar.css'

const Navbar = ({size,setshowcart}) => {
  return (
    <div>
        <nav className='navArea'>
            <div className='navBox1'  onClick={()=>setshowcart(true)}>
                    <span className='nav-logo'>S
                      </span>hoe<span className='nav-logo'>F</span>ound
            </div>
            <div className='nav-btn'>
              <button>Sports Shoes</button>
              <button>Casual Shoes</button>
              <button>Formal Shoes</button>
            </div>
            <span className='navBox2'>
            <i id='icon' class="fa fa-cart-plus" aria-hidden="true"  onClick={()=>setshowcart(false)}></i>
            <sup className='cart-num'>{size}</sup>
            </span>
        </nav>
    </div>
  )
}

export default Navbar