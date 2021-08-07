import React from 'react'

const Contact = () => {
    return (
        <>
              <div className="container">
                    <div>
                        Get in Touch
                    </div>
                    <form>
                        <div className="justify-content-center align-items-center d-flex">
                            <input type="text" placeholder="Your Name" required="true" />
                            <input type="email" placeholder="Your Email" required="true" />
                            <input type="number" placeholder="Your Number" required="true" />
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
