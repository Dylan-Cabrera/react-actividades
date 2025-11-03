import React from 'react'
import { useForm } from '../hooks/useForm'

export const Login = ({onLogin}) => {
  const initialForm = {
    username: "",
    password: ""
  }

  const [ form, handleChange, handleSubmit] = useForm(initialForm)

  return (
    <>
    <form onSubmit={(event) => handleSubmit(event, onLogin)}>

    <label htmlFor="username"> username </label>
    <input type="text" name='username' value={form.username}  onChange={handleChange}/>
    <label htmlFor="password"> Password </label>
    <input type="password" name='password' value={form.password}  onChange={handleChange}/>
    <button type="submit" > Submit </button>
    </form>
    </>
  )
}
