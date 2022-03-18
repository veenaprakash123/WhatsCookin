import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router';
import {Form, Button} from 'react-bootstrap'

const Login = () => {

        const [user, setUser] = useState({
            name: '',
            username: '',  
            password: '',
            confirmPassword: '',
            valid: null
        });


        const[loggedInUser, setLoggedInUser] = useState(user)
        const[message, setMessage] = useState('')
    
    
        let navigate = useNavigate()
    
    
        let handleChange = (e) => {
            setLoggedInUser({...loggedInUser,[e.target.id]:e.target.value})
        }
    
        let handleSubmit = (e) =>{
            e.preventDefault()
    
            fetch('http://localhost:7200/session/login', {
              method: "POST", 
              body: JSON.stringify(loggedInUser),
              headers: {
                'Content-Type':'application/json'
              }
         
            })
            .then((res)=> {
              return(
                res.json()
              )
            })
            .then((data)=> {
              console.log(data)
              if (data.status === 200){
                setToast(loggedInUser.username)
                navigate('/entries')
              } else if (data.status === 400){
                  setMessage(data.msg)
                } 
              })
             }
    


  return (
    <div>
        <h1>Login </h1>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Sign In 
            </Button>
            </Form>
    
    
    </div>
  )
}

export default Login