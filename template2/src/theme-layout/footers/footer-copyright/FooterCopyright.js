import React from 'react'

const FooterCopyright = () => {
  return (
    <>
      <div className="copyright-wrap">
        <div className="container">
          <div className="container-inner-wrap">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-9">
                <div className="copyright-text">
                  <div className="logo"><a href="index.html"><img src="img/logo/fw_logo.png" alt="" /></a></div>
                  <p>Copyright &copy; 2021 Artom. All Rights Reserved.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-3 d-none d-md-block">
                <div className="footer-lang">
                  <div className="dropdown">
                    <button className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <img src="img/icon/united-states.png" alt="" /> English
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a className="dropdown-item"><img src="img/icon/russia.png" alt="" />Russia</a>
                      <a className="dropdown-item"><img src="img/icon/thailand.png" alt="" />Thailand</a>
                      <a className="dropdown-item"><img src="img/icon/india.png" alt="" />India</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></>
  )
}

export default FooterCopyright