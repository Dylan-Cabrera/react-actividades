import React from 'react'
import { useForm } from '../hooks/useForm'

export const Login = () => {
  const initialForm = {
    email: "",
    password: ""
  }

  const [name, form, handleChange, handleReset] = useForm(initialForm)

  return (
    <>
    <label htmlFor="email"> Email </label>
    <input type="text" name='email' value={form.email}  onChange={handleChange}/>
    <label htmlFor="password"> Password </label>
    <input type="password" name='password' value={form.password}  onChange={handleChange}/>
    <button type="submit" onClick={() => {con}}> Submit </button>
    </>
  )
}
