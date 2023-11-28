import { useEffect, useState } from 'react'

import './App.css'

function App() {


 const [state,setState]=useState(false)
 const [count,setCount]=useState(0)
 const [color,setColor]=useState("")

 useEffect(()=>{
  console.log("mounting",count)
  
    return()=>{
      console.log("unmounting",count)
    }

 },[state,count])


  return (

    <div className='App'>

      <button onClick={()=>setState(!state)}>show and hide</button>
      {state ? <h1>hello Ajay</h1> : null }
         
         <button onClick={()=>setCount(count+1)}> increment</button>
         <button onClick={()=>setCount(count-1)}>decrement</button>
         <h1>count {count} </h1>\
        


        <button onClick={()=>setColor(state)}>color button</button>
        
        <div className='noo' style={{ color:"{ color ? black:blue"}}>

        </div>

      
    </div>
   
  
  )
}

export default App
