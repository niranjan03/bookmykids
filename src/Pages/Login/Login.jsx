import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGooglePlus, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Login = () => {
  return (
    <div className="container-fluid py-5 vh-150 d-flex align-items-center justify-content-center bg-light">
      <div className="col-md-6 col-lg-4">
        <h1 className="text-danger mb-3">Welcome to Book My Kids!</h1>
        <p className="text-muted mb-4">
          Join Book my kids to access exclusive casting opportunities, connect with industry professionals, and start your journey towards stardom. Join our community and take the first step in showcasing your talent!
        </p>
        
        <div className="card bg-dark text-white">
          <div className="card-body">
            <h2 className="card-title mb-4 text-center text-danger ">User Login</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control bg-secondary text-white" id="email" placeholder='Email' />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control bg-secondary text-white" id="password" placeholder='Password' />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="remember" />
                <label className="form-check-label" htmlFor="remember">Remember Me</label>
              </div>
              <button type="submit" className="btn btn-danger w-100 mb-3">Login</button>
            </form>
            <div className="text-end mb-3">
              <a href="/" className="text-info">Forgot Password?</a>
            </div>
            <div className="text-center mb-3">
              <span>OR</span> <br />
              <span>Login with</span>
            </div>
            <div className="d-flex justify-content-center">
            
              <button className="btn btn-light me-2">
              <FontAwesomeIcon icon={faFacebook} />
              </button>
              <button className="btn btn-light me-2">
              <FontAwesomeIcon icon={faGooglePlus} />
              </button>
              <button className="btn btn-light me-2">
              <FontAwesomeIcon icon={faLinkedin} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
