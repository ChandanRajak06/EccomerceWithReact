import React from 'react'
import shoeApi from './Api'
import ShoeCard from './ShoeCard'

const Main = ({handleitem}) => {
  return (
    <div>
        {shoeApi.map((item)=>(
            <ShoeCard item={item} handleitem={handleitem} />
        ))}
    </div>
  )
}

export default Main;