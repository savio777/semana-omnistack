import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import { Link } from 'react-router-dom'

import './Main.css'

import api from '../services/api'

import logo from '../assets/logo.svg'
import like from '../assets/like.svg'
import dislike from '../assets/dislike.svg'
import itsamatch from '../assets/match.png'

function Main({ match }) {
  const [users, setUsers] = useState([])
  const [matchDev, setMatchDev] = useState(true)

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
      query: { user: match.params.id }
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

  return (
    <div className="main-container">
      <Link to="/">
        <img src={logo} alt="TinDev" />
      </Link>
      {(users.length > 0) ? (
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
      ) : (
          <div className="main-container">
            <Link to="/">
              <img src={logo} alt="TinDev" />
            </Link>
            <div className="empty">Acabou:(</div>
          </div>
        )}
      {(matchDev) ?
        (
          <div className="match-container">
            <img className="match" src={itsamatch} alt="its a match" />
            <img className="avatar" src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="teste" />
            <strong>Nome do User</strong>
            <p>a bio do user bla bla bla bla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla bla </p>
          </div>
        ) : (<div />)}
    </div>
  )
}

export default Main
