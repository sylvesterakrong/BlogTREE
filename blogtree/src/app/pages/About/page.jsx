import Image from "next/image";

const About = () =>{

    return(
        <section className="section pt-0 mt-0 pr-0 mr-0 pl-0 pr-0 ">
            <div className="container is-fullhd">
                <figure class="image is-2by1 is-centered">
                <Image 
                class="has-ratio"
                alt="" 
                width="2000" height="360" src="/assets/heroimage.jpg" frameborder="0" allowfullscreen></Image>
                </figure>
            </div>
            <div className="columns p-5 m-0">
                <div className="column is-2"></div>
                <div className="column card">
                <div className="content is-size-5 p-5 mr-3 ml-3 mt-5 pt-5 ">
                <h1 className="is-size-3 ">
                    BlogTREE
                </h1>
                <div className="content">
                    <p>
                    <strong className="is-danger">BlogTREE</strong> is a modern blog website that allows you to create, publish, and explore captivating articles and stories. With its intuitive and user-friendly interface, BlogTREE provides a seamless experience for both authors and readers.
                    </p>
                </div>

                <p class="title is-size-4">Features</p>

                <div className="content">
                    <p>
                    <strong>Create and Publish:</strong> Easily create and publish your own blog posts with the built-in editor. Write compelling content and share it with the world.
                    </p>
                </div>

                <div className="content">
                    <p>
                    <strong>Discover Engaging Content:</strong> Explore a wide range of articles and stories written by other talented authors. Find inspiration and stay up-to-date with trending topics.
                    </p>
                </div>

                <div className="content">
                    <p>
                    <strong>Interact and Engage:</strong> Like and comment on posts that resonate with you. Engage in meaningful discussions and connect with like-minded individuals.
                    </p>
                </div>

                <div className="content">
                    <p>
                    <strong>Responsive Design:</strong> Enjoy a responsive design that adapts to different screen sizes, ensuring a seamless experience on desktop, tablet, and mobile devices.
                    </p>
                </div>


                <p class="title is-size-5">Contributing</p>
                <div className="content">
                    <p>
                    Contributions to BlogTREE are always welcome! If you have any ideas, suggestions, or bug fixes, feel free to open an issue or submit a pull request on Github. We appreciate your contributions.
                    </p>
                </div>

                <p class="title is-size-5">Contact</p>
                <div className="content">
                    <p>
                    If you have any questions or feedback regarding BlogTREE, you can reach out to us at:<br></br>
                    Email: akrongsylvester@gmail.com
                    </p>
                    <p>
                    Thank you for choosing BlogTREE to express your thoughts and ideas. 
                    </p>
                    <p class="title is-size-5 my-3">Happy blogging!  ♡ </p>
                </div>
            </div>
                </div>
                <div className="column is-2"></div>
            </div>
        </section>

    )

}


export default About