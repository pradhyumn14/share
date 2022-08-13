import React from 'react'
import './login.css'

const Login = () => {
  return (
    <>
    <div className="container1">
  <form action="/action_page.php">
    <div className="row">
      <h2>Login with Social Media or Manually</h2>
      <div className="vl">
        <span className="vl-innertext"></span>
      </div>

      <div className="col">
        <a href="https://www.facebook.com/" className="fb btn">
          <i className="fa fa-facebook fa-fw"></i> Login with Facebook
        </a>
        <a href="https://twitter.com/" className="twitter btn">
          <i className="fa fa-twitter fa-fw"></i> Login with Twitter
        </a>
        <a href="https://mail.google.com/" className="google btn">
          <i className="fa fa-google fa-fw"></i> Login with Google+
        </a>
      </div>

      <div className="col">
        <div className="hide-md-lg">
          <p>Or sign in manually:</p>
        </div>

        <input type="text" name="username" placeholder="Name" required/><br/>
        <input type="password" name="password" placeholder="Password" required/>
        <input type="submit" value="Login"/>
      </div>

    </div>
  </form>
</div>

<div className="bottom-container">
  <div className="row">
    <div className="col">
      <a href="./Register" className="btn">Sign up</a>
    </div>
    <div className="col">
      <a href="#pass" className="btn">Forgot password?</a>
    </div>
  </div>
</div>

    </>
  )
}

export default Login