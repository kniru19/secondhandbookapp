import { useState } from 'react'
import '../styles/Register.css'

function Register({ onLogin }) {
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setMessage('Your account is ready for its first chapter.')
  }

  return (
    <main className="auth-page register-page">
      <section className="register-card" aria-labelledby="register-title">
        <div className="register-header">
          <div className="brand-mark brand-mark--small" aria-hidden="true"><span>SH</span></div>
          <div>
            <p className="form-kicker">SECONDHAND BOOKS</p>
            <p className="header-note">A better home for good stories.</p>
          </div>
        </div>
        <div className="register-heading">
          <p className="form-kicker">START YOUR JOURNEY</p>
          <h1 id="register-title">Create your account</h1>
          <p className="form-intro">Join a community that keeps books in circulation.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label className="input-group">
              <span>First name</span>
              <input type="text" placeholder="Alex" autoComplete="given-name" required />
            </label>
            <label className="input-group">
              <span>Last name</span>
              <input type="text" placeholder="Morgan" autoComplete="family-name" required />
            </label>
          </div>
          <label className="input-group">
            <span>Email address</span>
            <input type="email" placeholder="you@example.com" autoComplete="email" required />
          </label>
          <label className="input-group">
            <span>Password</span>
            <input type="password" placeholder="At least 8 characters" autoComplete="new-password" minLength="8" required />
          </label>
          <label className="terms">
            <input type="checkbox" required />
            <span>I agree to the <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a>.</span>
          </label>
          <button type="submit" className="submit-button">Create account <span aria-hidden="true">→</span></button>
        </form>

        {message && <p className="status-message" role="status">{message}</p>}
        <p className="account-prompt">Already have an account? <button type="button" onClick={onLogin}>Sign in</button></p>
      </section>
    </main>
  )
}

export default Register
