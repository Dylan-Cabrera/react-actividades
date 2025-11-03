import React, { useState } from 'react'

export const useForm = (initialValue) => {
  const [form, setForm] = useState(initialValue)
  const {username} = form

  const handleChange = (event) => {
    const {name, value} = event.target
    setForm({...form,
      [name]: value}
    )
  }

  const handleReset = () => {
    setForm({form: initialValue})
  }

   const handleSubmit = (event, onLogin) => {
    handleReset()
    event.preventDefault()
    if(username.toLowerCase() === "facu" || username.toLowerCase() === "facundo" || username.toLowerCase() === "facu" || username.toLowerCase() === "harty") {
      return onLogin(username + " gay")
    }
    onLogin(username)
  }





  return [form, handleChange, handleSubmit]
}
