import React from "react";

const About = () => {
  return (
    <>
      <div className="container">
        <form >
          <div className="row">
            <div className="col-md-6">
              <div className="">
                <h5>Aditya</h5>
                <h6>Web Developer</h6>
                <p className="mt-3 mb-3">
                  RANKINGS <span>1/10</span>
                </p>

                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      role="tab"
                      href="#home"
                    >
                      About
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="profile-tab"
                      data-toggle="tab"
                      role="tab"
                      href="#profile"
                    >
                      TimeLine
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
                <input type="text" className="bg-badge rounded btn" type="submit" value="Edit Profile" />
                </div>
          </div>

    <div className="row">
        {/* Left Side */}

    <div className="col-md-4">
        <div className="profile">
            <p>WORK LINK</p>
            <a href="https://www.youtube.com/channel/UCnUZ3ylWXOpfR7sMt8AEPxQ" target="_blank">Youtube</a><br />
            <a href="https://www.instagram.com/ranochtech/" target="_blank">Instagram</a><br />
            <a href="https://github.com/adityakumar48" target="_blank">Github</a><br />
        </div>
    </div>


        {/* Right SIde */}
        <div className="col-md-8 pl-5">
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-aria-labelledby="home">
                        <div className="row">
                            <div className="col-md-6">
                                <label>user ID</label>
                            </div>
                            <div className="col-md-6"> 
                                <p>6268887802</p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <label>Name</label>
                            </div>
                            <div className="col-md-6"> 
                                <p>Aditya</p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <label>Name</label>
                            </div>
                            <div className="col-md-6"> 
                                <p>Aditya</p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <label>Name</label>
                            </div>
                            <div className="col-md-6"> 
                                <p>Aditya</p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <label>Name</label>
                            </div>
                            <div className="col-md-6"> 
                                <p>Aditya</p>
                            </div>
                        </div>
                        <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-aria-labelledby="profile-tab">
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <label>Name</label>
                            </div>
                            <div className="col-md-6"> 
                                <p>Aditya</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                
        </div>
    </div>


        </form>
      </div>
    </>
  );
};

export default About;
