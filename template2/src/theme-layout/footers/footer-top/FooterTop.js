import React, { useEffect } from 'react'
import { FooterMenu } from './footerTopConstant';

const FooterTop = () => {

  useEffect(() => {
    console.log("FooterMenu", FooterMenu);
  }, [])

  return (
    <>
      <div className="footer-top-wrap gray-bg">
        <div className="container">
          <div className="container-inner-wrap">
            <div className="row">

              {
                FooterMenu.map((footer) => {
                  return (
                    <div className="col">
                      <div className="footer-widget">
                        <div className="fw-title">
                          <h5 className="title">{footer.title}</h5>
                        </div>
                        <div className={footer.type === 'links' ? 'fw-link' : 'fw-social'}>
                          {
                            footer.type === 'links' && <ul>
                              {
                                footer.list.map((footerlist) => {
                                  return (
                                    <li><a href={footerlist.path}>{footerlist.title}</a></li>
                                  )
                                })
                              }
                            </ul>
                          }
                          {
                            footer.type === 'icons' && <ul>
                              {
                                footer.list.map((footerlist) => {
                                  return (
                                    <li><a><i className={footerlist.class}></i></a></li>
                                  )
                                })
                              }
                            </ul>
                          }

                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FooterTop