"use client"
import Link from "next/link";
import { useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserAstronaut, faMap } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
   

    return (
      <section className="hero is-medium">
        <div className="hero-head">
            <nav className='navbar is-expanded is-fixed is-light has-shadow' role="navigation" aria-label="main navigation">
              <div className="navbar-brand">
                <div className="navbar-item py-5 px-5">
                  <h1 className="is-size-3 ">
                    BlogTREE
                  </h1>
                </div>

                  
                    {/*mobile navbar */} 
                <a role="button" className=" navbar-burger my-4" onClick= {() => setToggleDropdown((prev) => !prev)}>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>        
              </div>
              <div>
                {toggleDropdown && (
                  <div className="dropdown-content card-content mr-5 ml-5 has-shadow">
                    <div className="pb-1">
                      <Link href="/" className="dropdown-item is-size-5" onClick={()=> setToggleDropdown(false)}><FontAwesomeIcon icon={faHome} /> home</Link>
                      <Link href="/pages/About" className="dropdown-item is-size-5" onClick={()=> setToggleDropdown(false)}><FontAwesomeIcon icon={faMap}/>  about</Link>                         
                      <Link href="/pages/Profile" className="dropdown-item is-size-5" onClick={()=> setToggleDropdown(false)}><FontAwesomeIcon icon={faUserAstronaut}/> profile
                      </Link>
                    </div>
                  </div>
                )}
              </div>

                  {/*desktop navbar */}
              <div className="navbar-menu">
                <div className="navbar-end is-size-5 px-5 py-5 ">
                  <Link href="/" className="navbar-item">home</Link>
                  <Link href="/pages/About" className="navbar-item">about</Link>
                  <Link href="/pages/Profile" className="navbar-item">profile</Link>
                </div>
              </div>
            </nav>
        </div>

        
      </section>
       
    )
};

export default Navbar;