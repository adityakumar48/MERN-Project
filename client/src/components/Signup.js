import React,{useState} from 'react'
import {NavLink,useHistory} from 'react-router-dom'
const Signup = () => {
    const history = useHistory()
    const [user,setUser] = useState({
        name:"",
        email:"",
        phone:"",
        work:"",
        password:"",
        cpassword:""
    })
    let name,value;
const handleInputs = (e)=>{
    
    name = e.target.name;
    value = e.target.value;

    setUser({...user,[name]:value})
}

const PostData = async (e) =>{
    e.preventDefault();
    const { name,email,phone,work,password,cpassword} = user;
    const res = await fetch("/register",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name,email,phone,work,password,cpassword
        })
    });
    const data = await res.json();
    if(data.status === 422 || !data){
        window.alert("Registration failed")
        console.log("Registration failed");
    }else{
        window.alert("Registration SuccessFull")
        console.log("Registration SuccessFull");
        history.push("/signin")
    }

}

    return (
        <>
            <section className='signup'>
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Signup</h2>
                            <form method="post" className="register-form">
                                    <div className="form-group">
                                        <label htmlfor="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                        <input type="text" name="name" value={user.name} onChange={handleInputs} autocomplete="off" placeholder=" Your Name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlfor="email"><i class="zmdi zmdi-email material-icons-name"></i></label>
                                        <input type="email" name="email" value={user.email} onChange={handleInputs} autocomplete="off" placeholder=" Your Email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlfor="phone"><i class="zmdi zmdi-phone-in-talk material-icons-name"></i></label>
                                        <input type="number" name="phone" value={user.phone} onChange={handleInputs} autocomplete="off" placeholder=" Your Number" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlfor="work"><i class="zmdi zmdi-slideshow material-icons-name"></i></label>
                                        <input type="text" name="work" value={user.work} onChange={handleInputs} autocomplete="off" placeholder=" Your Profession" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password"><i class="zmdi zmdi-lock material-icons-name"></i></label>
                                        <input type="password" name="password" value={user.password} onChange={handleInputs} autocomplete="off" placeholder=" Your Password" />
                                    </div>
                                  
                                   
                                    <div className="form-group">
                                        <label htmlFor="cpassword"><i class="zmdi zmdi-lock material-icons-name"></i></label>
                                        <input type="password" name="cpassword" value={user.cpassword} onChange={handleInputs} autocomplete="off" placeholder=" Your Confirm Password" />
                                    </div>
                                  
                                   <div className="form-group form-button"> 
                                        <input onClick={PostData} type="submit" name="signup" value="register" className="btn btn-primary" />
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
