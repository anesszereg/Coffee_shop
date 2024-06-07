import React, { useState } from 'react'

function Client( {passOrder}) {


    const [order , setOrder]=useState('')
    const handleOrder = ()=>{
        passOrder(order)
    }


  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '30vh' }}>
      <h2>Client</h2>


      <input
        type="text"
        placeholder="order here"
        value={order}
        onChange={(e)=> setOrder(e.target.value)}
      />


      <button onClick={handleOrder} >Order</button>
    </div>
  )
}

export default Client
