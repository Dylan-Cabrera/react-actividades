import React, { useState } from 'react'

export const useForm = (initialValue) => {
  const [form, setForm] = useState(initialValue)

  const handleChange = (event) => {
    const {name, value} = event.target
    setForm({...form,
      [name]: value}
    )
  }

  const handleReset = () => {
    setForm({form: initialValue})
  }

  const name = () =>{
    const username = form.username
    return [username]
  }

  return [name,form, handleChange, handleReset]
}
