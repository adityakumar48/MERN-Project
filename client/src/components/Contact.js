import React,{useEffect,useState} from 'react'

const Contact = () => {

  const [userData,setUserData] = useState({});

    const userContact = async () => {
      try {
        const res = await fetch('/getdata',{
          method:'GET',
          headers:{
            'Content-Type':'application/json'
          },
        })

        const data = await res.json();
        console.log(data);
        setUserData(data)

        if (!res.status===200) {
          const error = new Error(res.error)
          throw error;
        } 

      } catch (err) {
        console.log(err);

      }
  }

  useEffect(() => {
    userContact();
  }, [])
    return (
        <>
              <div className="container">
                    <div>
                        Get in Touch
                    </div>
                    <form>
                        <div className="justify-content-center align-items-center d-flex">
                            <input type="text" value={userData.name} placeholder="Your Name" required="true" />
                            <input type="email"value={userData.email}  placeholder="Your Email" required="true" />
                            <input type="number"value={userData.phone}  placeholder="Your Number" required="true" />
                        </div>
                        <div>
                            <textarea placeholder=" Enter Your Message" cols="30" rows="10">

                            </textarea>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-primary" > Send Message</button>
                        </div>
                    </form>
              </div>
        </>
    )
}

export default Contact
