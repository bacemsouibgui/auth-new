import { LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../constants/ActionsTypes";
import axios from 'axios'

//Register User
export const registerUser=(formData)=> async(dispatch)=> {

    try {
        const res= await axios.post('/api/authent/register', formData)
        dispatch({
        type: REGISTER_USER,
        payload: res.data
        })

    }

    catch(error) {
    console.log(error)
    }
}

// Login User
export const loginUser=(formData)=>async(dispatch)=> {

    try {
        const res= await axios.post('/api/authent/login', formData)
     dispatch({
        type: LOGIN_USER,
        payload: res.data
     })
    }
    catch(error) {
        console.log(error)

    }
}

//Logout user
export const logout=()=>(dispatch)=> {
   
    dispatch({
        type: LOGOUT_USER
    })
}