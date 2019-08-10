import React, { useState } from 'react'
import './Login.css'

import api from '../services/api'

import logo from '../assets/logo.svg'

function Login({ history }) {
  const [user, setUser] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()

    const response = await api.post('/dev', {
      user: user
    })

    const { _id } = response.data

    history.push(`/dev/${_id}`)
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt='TinDev' />
        <input
          placeholder='Seu user do Github'
          name="user"
          value={user}
          onChange={(event) => setUser(event.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}

export default Login
