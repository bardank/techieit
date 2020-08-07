import React, { Fragment, useRef } from 'react';
import FooterSvg from './UI/footer'
import Link from 'next/link'

const Footer = props => {
    const svgRef = useRef(null)
 
    return (
        <Fragment>
        <footer ref={svgRef}>
            
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                        <span className="large">Connect with us.</span>
                        <ul>
                            <li><a href="#">Fb <i className="fas fa-long-arrow-alt-right"></i></a></li>
                            <li><a href="#">Tw <i className="fas fa-long-arrow-alt-right"></i></a></li>
                            <li><a href="#">It <i className="fas fa-long-arrow-alt-right"></i></a></li>
                            <li><a href="#">Li <i className="fas fa-long-arrow-alt-right"></i></a></li>
                        </ul>
                        <address>
                            <p>+977 9849068407
                                <br/>
                                7th Floor, Sankhamul Tower, Sankhamul, Kathmandu 
                            </p>
                        </address>
                    </div>
                    <div className="col-md-6 text-right">
                        <p>Want to know more about us?</p>
                        <div className="rdmore">
                            <div className="text-right">
                                <Link href='/services' passHref>
                                <a className="rdbtn" >contact us 
                                <i className="fas fa-long-arrow-alt-right"></i></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterSvg className="img-fluid nepal" />
            <div className="f-btm">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="d-flex align-items-center justify-content-center">&copy; Copyright 2020 Techie IT Pvt. Ltd.  Design with 
                                <HeartLoader/> from Nepal</p>
                        </div>
                    </div>
                </div>
            </div>	
        </footer>
        <a className="back-to-top" id="back-top"></a>
        </Fragment>
    )
}
function HeartLoader(props) {
  return (
    <svg className='heart-loader' viewBox="0 0 102.4 93.6" {...props}>
      <path
        className="heart-loader__heartPath"
        d="M51.2 8.8c11.7-11.7 30.7-11.7 42.4 0s11.7 30.7 0 42.4L51.2 93.6 8.8 51.2C-2.9 39.5-2.9 20.5 8.8 8.8s30.7-11.7 42.4 0"
      />
    </svg>
  )
}


export default Footer;
