import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import { Link } from 'react-router-dom'

import './Main.css'

import api from '../services/api'

import logo from '../assets/logo.svg'
import like from '../assets/like.svg'
import dislike from '../assets/dislike.svg'

function Main({ match }) {
  const [users, setUsers] = useState([])

  // request the api
  useEffect(() => {
    async function loadUser() {
      const response = await api.get('/dev', {
        headers: { user: match.params.id }
      })
      setUsers(response.data)
    }
    loadUser()
  }, [match.params.id])

  // request the socket.io
  useEffect(() => {
    const socket = io('http://localhost:7777', {
      query: {user: match.params.id}
    })

    socket.on('match', (dev) => {
      console.log(dev)
    })
    
  }, [match.params.id])

  async function handleLike(id) {
    await api.post(`/dev/${id}/likes`, null, {
      headers: { user: match.params.id }
    })

    setUsers(users.filter(user => user._id !== id))
  }

  async function handleDislike(id) {
    await api.post(`/dev/${id}/dislikes`, null, {
      headers: { user: match.params.id }
    })

    setUsers(users.filter(user => user._id !== id))
  }

  if (users.length <= 0) {
    return (
      <div className="main-container">
        <Link to="/">
          <img src={logo} alt="TinDev" />
        </Link>
        <div className="empty">Acabou:(</div>
      </div>
    )
  }
  return (
    <div className="main-container">
      <Link to="/">
        <img src={logo} alt="TinDev" />
      </Link>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            <img src={user.avatar} alt={user.name} />
            <footer>
              <strong>{user.name}</strong>
              <p>{user.bio}</p>
            </footer>
            <div className="buttons">
              <button type="button" onClick={() => handleLike(user._id)}>
                <img src={like} alt="like" />
              </button>
              <button type="button" onClick={() => handleDislike(user._id)}>
                <img src={dislike} alt="dislike" />
              </button>
            </div>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default Main
