import React from 'react'

function Menu({data}) {

  return (
    <div style={{ width: '30vh' }}>
      <h2>Menu</h2>
      <ul>
        {data.map((item,index)=>{
            return <li key={index}>{item}</li>


        })}
       

      </ul>
    </div>
  )
}

export default Menu
