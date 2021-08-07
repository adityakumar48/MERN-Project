import React from 'react'
import {NavLink} from "react-router-dom";

const Login = () => {
    return (
        <>
            <section className='sign-in'>
                <div className="container mt-5">
                    <div className="Signin-content">
                        <div className="Signin-form">
                            <h2 className="form-title">Signin</h2>
                            <form className="register-form">
                                  
                                    <div className="form-group">
                                        <label htmlfor="email"><i class="zmdi zmdi-email material-icons-name"></i></label>
                                        <input type="email" name="email" autocomplete="off" placeholder=" Your Email" />
                                    </div>
                                  
                                    <div className="form-group">
                                        <label htmlFor="password"><i class="zmdi zmdi-lock material-icons-name"></i></label>
                                        <input type="password" name="password" autocomplete="off" placeholder=" Your Password" />
                                    </div>
                                  
                                   
                            
                                   <div className="form-group form-button"> 
                                        <input type="submit" name="Signin" value="Log in" className="btn btn-primary" />
                                   </div>
                            </form>
                            <div>
                                <NavLink to="/Signin"> Create an Account ? </NavLink>
                            </div>
                        </div>
                    </div>
                    </div> 

            </section>
        </>
    )
}

export default Login
