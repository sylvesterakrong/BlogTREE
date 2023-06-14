"use client"
import Link from "next/link";

const Navbar = () => {
   

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

                  <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="menu" >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                  </a>

              </div>

              <div id="menu" className="navbar-menu">
                <div className="navbar-end is-size-5 px-5 py-5">
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