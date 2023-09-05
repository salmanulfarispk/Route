import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate= useNavigate()

  return (
    <div>

  <h1>Welcome to Home page...</h1>

  
  <Button className='ms-2' onClick={()=>{
           navigate('/login')
    }}   variant="secondary" type="submit">
        Previous
      </Button>

    </div>
  )
}

export default Home