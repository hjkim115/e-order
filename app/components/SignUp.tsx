'use client'

import { useState, useContext } from 'react'
import authStyles from '../styles/auth.module.css'
import { AuthContext } from '../context/AuthContext'

export default function SignUp() {
  const [store, setStore] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const { signUp } = useContext(AuthContext)

  async function handleLogIn() {
    try {
      await signUp(email, password, store)
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      }
    }
  }

  return (
    <div className={authStyles.authContainer}>
      <h1>
        <span>BS2</span> Sign Up
      </h1>
      <div className={authStyles.form}>
        <div>
          <p>Store</p>
          <input
            type="text"
            placeholder="Store"
            onChange={(e) => setStore(e.target.value)}
          />
        </div>
        <div>
          <p>Email</p>
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <p>Password</p>
          <input
            type="text"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error ? <p style={{ color: 'red' }}>{error}</p> : null}
      </div>
      <button onClick={handleLogIn}>Sign Up</button>
    </div>
  )
}
