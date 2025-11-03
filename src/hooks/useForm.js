import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const useForm = (initialValue) => {
  const navigate = useNavigate
  const [form, setForm] = useState(initialValue)
  const {username} = form

  const handleChange = (event) => {
    const {name, value} = event.target
    setForm({...form,
      [name]: value}
    )
  }

  const handleReset = () => {
    setForm(initialValue)
  }

   const handleSubmit = (event, onLogin) => {
    handleReset()
    event.preventDefault()
    console.log(form)
    if(onLogin != null) {

      onLogin(username)
    }
  }



  return [form, handleChange, handleSubmit]
}
