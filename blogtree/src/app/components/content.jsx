import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faClock } from '@fortawesome/free-solid-svg-icons'
import Image from "next/image";


const Content = () => {

    return(
        <section className="section ">
        <div className="content is-size-5 mt-10 mx-5 my-6">
            <div className="columns">
                <div  className="column is-four-fifths is-10">
                    <h2 className="is-size-2 subtitle">
                        New blogs...
                    </h2>
                </div>
                <div  >
                    <div className="is-size-5 mb-5 mx-3">
                        <a href="#">create blog 
                         <FontAwesomeIcon 
                        icon={faAdd} className="icon is-small"/>               
                        </a>
                    </div>
                </div>
            </div>
        
            <div class="tile is-ancestor ">
                <div class="tile is-parent">
                    <article class="tile is-child box ">
                    <div class="card-image">
                        <figure class="image is-5by4 mb-5 mx-0 my-0">
                        <Image src="/assets/robot.jpg" alt="Placeholder image" width={1000} height={1000}></Image>
                        </figure>
                    </div>
                        <p class="title">Are we really ready for AI?</p>
                        
                        <div class="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                        </div>
                        <p className="subtitle has-text-grey-light"><FontAwesomeIcon icon={faClock} className="icon is-small"/> 3 mins read</p>
                    </article>
                </div>

                <div class="tile is-parent">
                    <article class="tile is-child box">
                        <div class="card-image">
                            <figure class="image is-5by4 mb-5 mx-0 my-0">
                            <Image src="/assets/car.jpg" alt="Placeholder image" width={1000} height={1000}></Image>
                            </figure>
                        </div>
                        <p class="title">The era of smart and electric cars</p>
                        <div class="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                        </div>
                        <p className="subtitle has-text-grey-light"><FontAwesomeIcon icon={faClock} className="icon is-small"/> 7 mins read</p>
                    </article>
                </div>

                <div class="tile is-parent">
                    <article class="tile is-child box">
                        <div class="card-image">
                            <figure class="image is-5by4 mb-5 mx-0 my-0">
                            <Image src="/assets/setup.jpg" alt="Placeholder image" width={1000} height={5000}></Image>
                            </figure>
                        </div>
                        <p class="title">Some ideas for your next setup</p>
                        <div class="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                        </div>
                        <p className="subtitle has-text-grey-light"><FontAwesomeIcon icon={faClock} className="icon is-small"/> 5 mins read</p>
                    </article>
                </div>
            </div>
            <div className="tile is-ancestor">
            <div class="tile is-parent">
                    <article class="tile is-child box">
                        <div class="card-image">
                            <figure class="image is-5by4 mb-5 mx-0 my-0">
                            <Image src="/assets/space-plane.jpg" alt="Placeholder image" width={1000} height={1000}></Image>
                            </figure>
                        </div>
                        <p class="title">Sci-fi aircrafts: Can we use them in today's world?</p>
                        <div class="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                        </div>
                        <p className="subtitle has-text-grey-light"><FontAwesomeIcon icon={faClock} className="icon is-small"/> 10 mins read</p>
                    </article>
                </div>

                <div class="tile is-parent">
                    <article class="tile is-child box">
                        <div class="card-image">
                            <figure class="image is-5by4 mb-5 mx-0 my-0">
                            <Image src="/assets/vr.jpg" alt="Placeholder image" width={1000} height={1000}></Image>
                            </figure>
                        </div>
                        <p class="title">Apple unveils their vision pro: The future of VR?</p>
                        <div class="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                        </div>
                        <p className="subtitle has-text-grey-light"><FontAwesomeIcon icon={faClock} className="icon is-small"/> 2 mins read</p>
                    </article>
                </div>

                <div class="tile is-parent">
                    <article class="tile is-child box">
                        <div class="card-image">
                            <figure class="image is-5by4 mb-5 mx-0 my-0">
                            <Image src="/assets/stock-trading.jpg" alt="Placeholder image" width={1000} height={1000}></Image>
                            </figure>
                        </div>
                        <p class="title">The stock market and its effect on Tech</p>
                        <div class="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                        </div>
                        <p className="subtitle has-text-grey-light"><FontAwesomeIcon icon={faClock} className="icon is-small"/> 4 mins read</p>
                    </article>
                </div>
            </div>
        </div>
        </section>
    )
}




export default Content