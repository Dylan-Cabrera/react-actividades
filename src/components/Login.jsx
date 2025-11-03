import React from 'react'
import { useForm } from '../hooks/useForm'

export const Login = ({onLogin}) => {
  
  const [form, handleChange, handleSubmit] = useForm({
    username: "",
    password: ""
  })

  const {username, password} = form

  return (
    <form onSubmit={(event) => handleSubmit(event, onLogin)}>
    <label htmlFor="username"> username </label>
    <input type="text" name='username' value={username}  onChange={handleChange}/>
    <label htmlFor="password"> Password </label>
    <input type="password" name='password' value={password}  onChange={handleChange}/>
    <button type="submit"> Submit </button>
    </form>
  )
}
