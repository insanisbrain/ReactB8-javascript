import React from 'react'

const TopHeader = () => {
  return (
    <>
      {/* Top Header Component */}
      <div className="header-top-wrap">
        <div className="container custom-container">
          <div className="row">
            <div className="col-lg-6 col-md-7 d-none d-md-block">
              <div className="header-top-contact">
                <ul>
                  <li><a href="tel:0123456789"><i className="fas fa-headphones"></i> +1 333 8654 45841</a></li>
                  <li><a href="https://themebeyond.com/cdn-cgi/l/email-protection#deadabaeaeb1acaa9ebba6bfb3aeb2bbf0bdb1b3"><i className="fas fa-envelope-open-text"></i> <span className="__cf_email__" data-cfemail="374442474758454377524f565a475b521954585a">[email&#160;protected]</span></a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-5">
              <div className="header-top-right">
                <ul>
                  <li className="header-time"><i className="far fa-clock"></i> Mon - Fri: 9:00 am - 06.00pm</li>
                  <li className="header-social">
                    <span>Follow :</span>
                    <a><i className="fab fa-facebook-f"></i></a>
                    <a><i className="fab fa-twitter"></i></a>
                    <a><i className="fab fa-pinterest"></i></a>
                    <a><i className="fab fa-linkedin-in"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Top Header Component */}
    </>
  )
}

export default TopHeader