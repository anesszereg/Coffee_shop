import { useState } from 'react'
import './App.css'
import Client from './components/Client'
import Menu from './components/Menu'
import Server from './components/Server'

function App() {


  const [menu, setMenu] = useState(['coffee', 'tea', 'pastries'])
  const [response , setResponse]=useState('')
  const [order, setOrder] = useState('')



  const getOrder =( data)=>{
    setOrder(data) 
    if (menu.includes(order)) {

      setResponse(` ${order} received`)
    } else {
      setResponse(`This item ${order} is not on the menu`)
    }
  }

  





  return (
    <div className='App'>
      <h1>Coffee Shop</h1>
    
      <div className="container">
        <Client  passOrder={getOrder}  />
        <Server result={response}  />
        <Menu data={menu}/>
      </div>
    </div>
  )
}

export default App
