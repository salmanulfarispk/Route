import React from 'react'
import { InputGroup,Button,Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Register = () => {

   const  navigate = useNavigate()



  return (
    <div>
    
    <InputGroup hasValidation>
      <InputGroup.Text>Firstname</InputGroup.Text>
      <Form.Control type="text" required isInvalid />
    
    </InputGroup><br/>

    <InputGroup hasValidation>
      <InputGroup.Text>Lastname</InputGroup.Text>
      <Form.Control type="text" required isInvalid />
      
    </InputGroup><br/>
    
    <InputGroup hasValidation>
      <InputGroup.Text>Username</InputGroup.Text>
      <Form.Control type="text" required isInvalid />
      
    </InputGroup><br/>


    <InputGroup hasValidation>
      <InputGroup.Text>Password</InputGroup.Text>
      <Form.Control type="Password" required isInvalid />
      
    </InputGroup><br/>

    <Button className='ms-2' onClick={()=>{
           navigate('/login')
    }}   variant="danger" type="submit">
        Submit
      </Button>


    </div>
  )
}

export default Register