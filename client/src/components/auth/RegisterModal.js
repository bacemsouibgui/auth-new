import React, {useState} from 'react';
import { FormGroup, ModalBody, ModalHeader, NavLink, Label, Input,Modal,Form, Button } from 'reactstrap';
import {useDispatch} from 'react-redux';
import { registerUser } from '../../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';

function RegisterModal() {
    const [modal, setModal]= useState(false);
    const [name, setName]= useState("");
    const [lastName, setLastName]= useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("")

    const toggle=()=> {
        setModal(!modal)
    }
    
    const dispatch= useDispatch();
    const navigate= useNavigate();
    const handleRegister=()=> {
        const newUser={name,lastName, email, password}
       dispatch(registerUser(newUser))
      navigate('/dashboard')
       toggle()
    }

  return (
    <div>
       <NavLink onClick={toggle} href='#'> Register </NavLink>

       <Modal isOpen={modal}>
        <ModalHeader toggle={toggle}>
            Register
        </ModalHeader>

        <ModalBody>
            <Form>
                <FormGroup>
                    <Label>Name</Label>
                    <Input
                    type='text'
                    name='name'
                    className='mb-3'
                    onChange={(e)=>setName(e.target.value)}/>


                <Label>lastName</Label>
                    <Input
                    type='text'
                    name='lastName'
                    className='mb-3'
                    onChange={(e)=>setLastName(e.target.value)}/>


                 <Label>Email</Label>
                    <Input
                    type='email'
                    name='email'
                    className='mb-3'
                    onChange={(e)=>setEmail(e.target.value)}/>


                  <Label>Password</Label>
                    <Input
                    type='password'
                    name='password'
                    className='mb-3'
                    onChange={(e)=>setPassword(e.target.value)}/>

                    <Button
                    color='dark'
                    onClick={handleRegister}> 

                   SUBMIT </Button>
                </FormGroup>
            </Form>
        </ModalBody>
       </Modal>
        </div>
  )
}

export default RegisterModal