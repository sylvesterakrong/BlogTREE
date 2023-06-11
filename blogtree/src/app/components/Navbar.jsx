import React from "react";
import Image from "next/image";

const Navbar = () => {
  
    return (
      <section className="hero is-medium">
        <div className="hero-head">
            <nav className='navbar is-expanded is- is-fixed is-light has-shadow' role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <div className="navbar-item py-5 px-5">
                  <h1 className="is-size-3 ">
                    BlogTREE
                  </h1>
                </div>
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="menu">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="menu" className="navbar-menu">
              <div className="navbar-end is-size-5 px-5 py-5">
                <a href="#" className="navbar-item">home</a>
                <a href="#"
                className="navbar-item">about</a>
                <a className="navbar-item">profile</a>
              </div>
            </div>
          </nav>
        </div>

        <div hero-foot >
          <div className="container">
            <figure class="image is-2by1 is-centered pr-0 pl-0">
              <Image class="has-ratio" width="1000" height="360" src="/assets/heroimage.jpg" frameborder="0" allowfullscreen></Image>
            </figure>
          </div>
        </div>
      </section>
       
    )
};

export default Navbar;