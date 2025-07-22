import React from 'react'
import Meta from '../components/meta'
import BreadCrumb from '../components/breadCrumb'
const Login = () => {
  return (
    <>
      <Meta title ="Log in" />
   <BreadCrumb title="log-in" />
   <div className="login-wrapper py-3 home-wrapper-2">
    <div className="row">
        <div className="col-12">
            <div className="auth-card">
            <div className="login-container">
        <div class="card">
            <div class="card-header">
                <h3>Login</h3>
            </div>
            <div class="card-body">
                <form>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" class="form-control" required />
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" class="form-control" required />
                    </div>
                   <div>
                    <a href="/forgot-password">Forgot password?</a>
                    </div>
                    <button type="submit" class="btn btn-primary login-btn my-3">Login</button>
                <div className="d-flex no-acc">
                    <p>Don't have an account?</p>
                    <a href="/signUp" className="px-2">Sign Up</a>
                </div>
                </form>
            </div>
            </div>
    </div>
            </div>
        </div>
    </div>
   </div>

    </>
  )
}

export default Login