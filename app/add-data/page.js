"use client"
import { useState } from 'react'
const Page = () => {
    const[click,clickchange]=useState("")
    const[num,numplus]=useState(0)

    const buttonclicked=()=>{
        clickchange("button clicked")
        numplus(num+1)
        
    }
  return (
    <div>
      <div>
            <button onClick={buttonclicked}>click</button>
      </div>

      <div>
        {click}<span>{num}</span>
      </div>
    </div>
  )
}

export default Page
