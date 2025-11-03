import React from 'react'
import { useForm } from '../hooks/useForm'



export const Register = () => {
  const initialForm = {
    username: "",
    email: "",
    password: "",
    firstname: "",
    lastname: ""
  }

  const [ form, handleChange, handleSubmit] = useForm(initialForm)


  return (
    <form onSubmit={(event) => handleSubmit(event, null)}>
    <label htmlFor="username"> Username </label>
    <input type="text" name='username' value={form.username}  onChange={handleChange}/>
    <label htmlFor="email"> Email </label>
    <input type="text" name='email' value={form.email}  onChange={handleChange}/>
    <label htmlFor="password"> Password </label>
    <input type="password" name='password' value={form.password}  onChange={handleChange}/>
    <label htmlFor="firstname"> Firstname </label>
    <input type="text" name='firstname' value={form.firstname}  onChange={handleChange}/>
    <label htmlFor="lastname"> Lastname </label>
    <input type="text" name='lastname' value={form.lastname}  onChange={handleChange}/>
    <button > Submit </button>
    </form>
  )
}
