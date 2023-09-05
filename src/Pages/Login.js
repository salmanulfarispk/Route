import React from 'react'
import { Form,Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const Login = () => {
   
      const navigate =useNavigate()


  return (
    <div>
   <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button className='ms-2' onClick={()=>{
          navigate('/home')
        
      }} variant="danger" type="submit">
        Login
      </Button>


      <Button className='ms-3' onClick={()=>{
          navigate('/')
      }} variant="secondary" type="submit">
        Previos
      </Button>
    </Form>




    </div>
  )
}

export default Login