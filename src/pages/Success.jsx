import React, { useEffect, useState } from 'react'
import {PacmanLoader} from 'react-spinners'
const Success = () => {

  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  },[])

  return (
    <div className='flex flex-col items-center justify-center h-screen'>

      {
        loading ? <PacmanLoader color='#36d7b7'/> : <div> <h2 className='text-3xl font-semibold mb-3'>order successfull</h2>
        <h3>Your order has been successfully placed</h3>
        </div>
      }
      
     
    </div>
    
  )
}

export default Success