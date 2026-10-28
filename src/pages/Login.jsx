import { useState } from 'react'
import '../styles/Login.css'

function BrandPanel() {
  return (
    <aside className="brand-panel">
      <div className="brand-mark" aria-hidden="true">
        <span>SH</span>
      </div>
      <p className="eyebrow">SECONDHAND BOOKS</p>
      <h2>Every story deserves<br />another reader.</h2>
      <p className="brand-copy">
        Find your next favourite book, give your old ones a new home, and
        keep good stories moving.
      </p>
      <div className="book-stack" aria-hidden="true">
        <span className="book book--cream" />
        <span className="book book--coral" />
        <span className="book book--navy" />
      </div>
    </aside>
  )
}

function Login({ onRegister }) {
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setMessage('Welcome back. Your bookshelf is waiting.')
  }

  return (
    <main className="auth-page login-page">
      <BrandPanel />
      <section className="form-panel" aria-labelledby="login-title">
        <div className="form-content">
          <div className="mobile-brand">
            <div className="brand-mark" aria-hidden="true"><span>SH</span></div>
            <span>SECONDHAND BOOKS</span>
          </div>
          <p className="form-kicker">WELCOME BACK</p>
          <h1 id="login-title">Sign in to your account</h1>
          <p className="form-intro">Pick up where you left off.</p>

          <form onSubmit={handleSubmit}>
            <label className="input-group">
              <span>Email address</span>
              <input type="email" placeholder="you@example.com" autoComplete="email" required />
            </label>
            <label className="input-group">
              <span>Password</span>
              <input type="password" placeholder="Enter your password" autoComplete="current-password" minLength="8" required />
            </label>
            <div className="form-options">
              <label className="remember">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <button type="button" className="text-button" onClick={() => setMessage('Password reset instructions are on the way.')}>
                Forgot password?
              </button>
            </div>
            <button type="submit" className="submit-button">Sign in <span aria-hidden="true">→</span></button>
          </form>

          {message && <p className="status-message" role="status">{message}</p>}
          <p className="account-prompt">New to Secondhand Books? <button type="button" onClick={onRegister}>Create an account</button></p>
        </div>
      </section>
    </main>
  )
}

export default Login
