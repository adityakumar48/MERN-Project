import React,{useState} from 'react'
import {NavLink,useHistory} from "react-router-dom";

const Login = () => {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
const loginUser = async (e) =>{
    e.preventDefault();

    const res = await fetch('/signin',{
        method: 'POST',
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            email, password
        })
    })
    const data = res.json();
    if(res.status === 400 || !data){
        window.alert("Invalid Credentials")
    }else{
        window.alert("Login Successfull")
        history.push('/')
    }
}
    return (
        <>
            <section className='sign-in'>
                <div className="container mt-5">
                    <div className="Signin-content">
                        <div className="Signin-form">
                            <h2 className="form-title">Signin</h2>
                            <form method="post" className="register-form">
                                  
                                    <div className="form-group">
                                        <label htmlfor="email"><i class="zmdi zmdi-email material-icons-name"></i></label>
                                        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="email" autocomplete="off" placeholder=" Your Email" />
                                    </div>
                                  
                                    <div className="form-group">
                                        <label htmlFor="password"><i class="zmdi zmdi-lock material-icons-name"></i></label>
                                        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" name="password" autocomplete="off" placeholder=" Your Password" />
                                    </div>
                                  
                                   
                            
                                   <div className="form-group form-button"> 
                                        <input type="submit" name="Signin" value="Log in" onClick={loginUser} className="btn btn-primary" />
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
