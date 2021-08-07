import React from 'react'
import {NavLink} from 'react-router-dom'
const Signup = () => {
    return (
        <>
            <section className='signup'>
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Signup</h2>
                            <form className="register-form">
                                    <div className="form-group">
                                        <label htmlfor="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                        <input type="text" name="name" autocomplete="off" placeholder=" Your Name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlfor="email"><i class="zmdi zmdi-email material-icons-name"></i></label>
                                        <input type="email" name="email" autocomplete="off" placeholder=" Your Email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlfor="phone"><i class="zmdi zmdi-phone-in-talk material-icons-name"></i></label>
                                        <input type="number" name="phone" autocomplete="off" placeholder=" Your Number" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlfor="work"><i class="zmdi zmdi-slideshow material-icons-name"></i></label>
                                        <input type="text" name="work" autocomplete="off" placeholder=" Your Profession" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password"><i class="zmdi zmdi-lock material-icons-name"></i></label>
                                        <input type="password" name="password" autocomplete="off" placeholder=" Your Password" />
                                    </div>
                                  
                                   
                                    <div className="form-group">
                                        <label htmlFor="cpassword"><i class="zmdi zmdi-lock material-icons-name"></i></label>
                                        <input type="password" name="cpassword" autocomplete="off" placeholder=" Your Confirm Password" />
                                    </div>
                                  
                                   <div className="form-group form-button"> 
                                        <input type="submit" name="signup" value="register" className="btn btn-primary" />
                                   </div>
                            </form>
                            <div>
                                <NavLink to="/signin">I am Already Register </NavLink>
                            </div>
                        </div>
                    </div>
                    </div> 

            </section>
        </>
    )
}

export default Signup
