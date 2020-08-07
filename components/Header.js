import React, { Fragment, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import {gsap} from 'gsap'
const Header = () => {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        gsap.to("body", 0, {visibility:'visible'})
        
        
    }, [])

    const toggleMenu =()=>{
        setToggle(!toggle)
    }

    return (
        <Fragment>
            <div className="t-fixed-comment">
                <div className="t-fixed-comment-text"><span className="font-weight-bold">Techie IT</span> an enthusiastic supporter</div>
                <div className="t-fixed-comment-crcl"></div>
            </div>
        <header className=" " style={{zIndex: 2 }} id='home'>
            <div className="row d-flex align-items-center">
                <div className="col-md-1">
                    <Link href="/" passHref>
                    <a ><img src="/img/favicon.svg" id='logo' className="img-fluid" alt=""/></a>
                    </Link>
                </div>
            </div>
            
            <nav className={toggle ?' navigation change': ' navigation '}>
                <button type="button" className="navbar-toggler hamburger-menu"  onClick={toggleMenu}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
                </button>
                <div className="bg-cover"></div>
                <div className="nav-content collapse" id="myNavbar">
                    <div className="conatiner-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                        <ul className="navbar-nav flex-lg-row flex-column nav-justified">
                            <NavItem onClick={()=> setToggle(!toggle)} link='/' title='HOME' />
                            <NavItem onClick={()=> setToggle(!toggle)} link='/services' title='SERVICES' />
                            <NavItem onClick={()=> setToggle(!toggle)} link='/works' title='WORKS' />
                            <NavItem onClick={()=> setToggle(!toggle)} link='/blog' title='BLOG' />
                            <NavItem onClick={()=> setToggle(!toggle)} link='/contact' title='CONTACT' />
                        </ul>
                        </div>
                        <div className="container">
                        <div className="row my-3 my-lg-5">
                            <div className="col-11 mx-auto text-center">
                            <h1 className="display-5 text-white">We help your business grow</h1>
                            <h2 className="text-capitalize text-light">Create amazing websites starting <span className="text-danger"> @Rs.5,999 </span>  only</h2>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </nav>
        </header>
        </Fragment>
    )
}
function NavItem(props) {
    const router = useRouter();
   
    return (
        <li className="nav-item" onClick={props.onClick}>
            <Link  href={props.link} passHref >
                <a className={router.pathname  === props.link ? "active nav-link m-3 link-item" : "nav-link m-3 link-item "} >
                {props.title}
                </a>
            </Link>
        </li>
    )
}
export default Header
