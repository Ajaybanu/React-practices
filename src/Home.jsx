import React, { useState } from 'react'

function Home() {
  const [input,setInput]=useState(" ")
  return (
    <div>
        <input type="button" value="" />
        <button onClick={setInput(e)input=>e.target.value}>Click</button>

        <h1>{input}</h1>
    </div>
  )
}

export default Home
