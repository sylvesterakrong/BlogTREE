import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faClock } from '@fortawesome/free-solid-svg-icons'
import Image from "next/image";
import Link from "next/link";


const Content = () => {

    return(
        <section className="section pt-0 mt-0 pr-0 mr-0 pl-0 pr-0">
           
                <div className="container is-fullhd">
                <figure class="image is-2by1 is-centered">
                <Image 
                class="has-ratio"
                alt="" 
                width="2000" height="360" src="/assets/heroimage.jpg" frameborder="0" allowfullscreen></Image>
                </figure>
                </div>
        <div className="content is-size-5 pr-5 mr-5 pl-5 ml-5 mt-5 pt-5">
            <div className="columns">
                <div  className="column is-four-fifths is-10">
                    <h2 className="is-size-2 subtitle">
                    New blogs...
                    </h2>
                </div>
                <div  >
                    <div className="is-size-5 mb-5 mx-3">
                        <Link href="/pages/create_blog">create blog 
                         <FontAwesomeIcon 
                        icon={faAdd} className="icon is-small"/>               
                        </Link>
                    </div>
                </div>
            </div>
        
            <div class="tile is-ancestor ">
                <div class="tile is-parent">
                <Link href="/pages/AI_blog">
                    <article class="tile is-child box ">
                    <div class="card-image">
                        <figure class="image is-5by4 mb-5 mx-0 my-0">
                        <Image src="/assets/robot.jpg" alt="Placeholder image" width={2000} height={2000}></Image>
                        </figure>
                    </div>
                        <p class="title">Are we really ready for AI?</p>
                        
                        <div class="content">
                            <p>
                                As artificial intelligence (AI) revolutionizes industries and pushes boundaries, we must ask ourselves: are we ready for its unleashed potential? AI's astounding capabilities bring with them concerns about ethics, privacy, and societal implications. Striking a balance between innovation and accountability becomes crucial as we navigate this ever-evolving landscape. Are we truly prepared for the AI-driven future that lies ahead? Join us as we explore the challenges and opportunities that come with embracing AI's transformative power.
                            </p>
                        </div>
                        <p className="subtitle has-text-grey-light is-fixed-bottom"><FontAwesomeIcon icon={faClock} className="icon is-small"/> 6 mins read</p>
                    </article>
                </Link>
                </div>

                <div class="tile is-parent">
                <Link href="/pages/smartcars_blog">
                    <article class="tile is-child box">
                        <div class="card-image">
                            <figure class="image is-5by4 mb-5 mx-0 my-0">
                            <Image src="/assets/car.jpg" alt="Placeholder image" width={2000} height={2000}></Image>
                            </figure>
                        </div>
                        <p class="title">The era of smart and electric cars</p>
                        <div class="content">
                            <p>Welcome to the era of smart and electric cars, where cutting-edge technology meets sustainable transportation. Discover how these vehicles are reshaping the automotive landscape and propelling us towards a greener future. From advanced connectivity features to zero-emission capabilities, smart and electric cars offer a new paradigm of driving. Uncover the environmental benefits of electric vehicles and their role in combating climate change. Join us as we explore the infrastructure developments and exciting possibilities that lie ahead in this transformative era of smart and electric cars.</p>
                        </div>
                        <p className="subtitle has-text-grey-light "><FontAwesomeIcon icon={faClock} className="icon is-small"/> 6 mins read</p>
                    </article>
                    </Link>
                </div>

                <div class="tile is-parent">
                <Link href="/pages/setup_blog">
                    <article class="tile is-child box">
                        <div class="card-image">
                            <figure class="image is-5by4 mb-5 mx-0 my-0">
                            <Image src="/assets/setup.jpg" alt="Placeholder image" width={2000} height={5000}></Image>
                            </figure>
                        </div>
                        <p class="title">Some ideas for your next setup</p>
                        <div class="content">
                            <p>Get ready to embrace the future with these innovative ideas for your next tech setup. From cutting-edge gadgets to futuristic home automation, we have curated a collection of trends that will revolutionize your living space. Discover the latest advancements in virtual reality, smart home devices, and augmented reality experiences that will transport you to a whole new dimension. Explore how artificial intelligence and machine learning are reshaping the way we interact with technology. Join us as we delve into the possibilities and inspire you to create a tech setup that embodies the spirit of innovation and transforms your everyday life.</p>
                        </div>
                        <p className="subtitle has-text-grey-light"><FontAwesomeIcon icon={faClock} className="icon is-small"/> 4 mins read</p>
                    </article>
                    </Link>
                </div>
            </div>

            <div className="tile is-ancestor">
                <div class="tile is-parent">
                <Link href="/pages/spaceplane_blog">
                    <article class="tile is-child box">
                        <div class="card-image">
                            <figure class="image is-5by4 mb-5 mx-0 my-0">
                            <Image src="/assets/space-plane.jpg" alt="Placeholder image" width={2000} height={2000}></Image>
                            </figure>
                        </div>
                        <p class="title">Sci-fi aircrafts: Can we use them in today's world?</p>
                        <div class="content">
                            <p>
                                Immerse yourself in the world of science fiction aircraft as we explore their fascinating designs and capabilities. But can these futuristic marvels actually find a place in today's world? Join us as we delve into the realm of sci-fi aircraft and examine the feasibility of their implementation. From advanced propulsion systems to cutting-edge materials, we'll unravel the technological advancements that could bring these fantastical creations closer to reality. Discover the potential applications and challenges that lie ahead in integrating sci-fi aircraft into our modern-day world. Buckle up and prepare to embark on a journey where imagination and innovation collide.
                            </p>
                        </div>
                        <p className="subtitle has-text-grey-light"><FontAwesomeIcon icon={faClock} className="icon is-small"/> 7 mins read</p>
                    </article>
                </Link>
                </div>

                <div class="tile is-parent">
                <Link href="/pages/vr_blog">
                    <article class="tile is-child box">
                        <div class="card-image">
                            <figure class="image is-5by4 mb-5 mx-0 my-0">
                            <Image src="/assets/vr.jpg" alt="Placeholder image" width={2000} height={2000}></Image>
                            </figure>
                        </div>
                        <p class="title">Apple unveils their vision pro: The future of VR?</p>
                        <div class="content">
                            <p>
                                Get ready to step into a new era of virtual reality as Apple unveils its groundbreaking Vision Pro. Join us as we explore Apple's vision for the future of VR and how this cutting-edge device is set to redefine the virtual reality landscape. From immersive experiences to advanced features, discover how the Vision Pro pushes the boundaries of what's possible in the world of VR. Dive into a world of stunning visuals, seamless integration, and unparalleled user experience as we embark on a journey into the future of VR with Apple's Vision Pro.
                            </p>
                        </div>
                        <p className="subtitle has-text-grey-light"><FontAwesomeIcon icon={faClock} className="icon is-small"/> 6 mins read</p>
                    </article>
                </Link>    
                </div>

                <div class="tile is-parent">
                <Link href="/pages/stocktrading_blog">
                    <article class="tile is-child box">
                        <div class="card-image">
                            <figure class="image is-5by4 mx-0 ">
                            <Image src="/assets/stock-trading.jpg" alt="Placeholder image" width={2000} height={2000}></Image>
                            </figure>
                        </div>
                        <p class="title">The stock market and its effect on Tech</p>
                        <div class="content">
                            <p>
                                Explore the intricate relationship between the stock market and the tech industry in this captivating blog. Delve into how fluctuations in the stock market can significantly impact the tech sector, influencing investment decisions, company valuations, and innovation. Join us as we analyze the symbiotic connection between stock market trends and the growth of tech giants. Gain insights into how market volatility can shape the trajectory of emerging technologies and disrupt established players. Discover the intricate dynamics that make the stock market a key player in shaping the future of the tech industry.
                            </p>
                        </div>
                        <p className="subtitle has-text-grey-light"><FontAwesomeIcon icon={faClock} className="icon is-small"/> 6 mins read</p>
                    </article>
                </Link>
                </div>
            </div>
        </div>
        </section>
    )
}




export default Content