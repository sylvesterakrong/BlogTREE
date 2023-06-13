import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF} from '@fortawesome/free-solid-svg-icons'

const Profile = () =>{

    return(
        <section className="section are-medium">
  
            <div className="columns">
                <div className="column"></div>
                <div  className="column">
                    <div class="card is-size-5 is-desktop-5">
                        <div class="card-image ">
                            <figure class="image is-4by3">
                            <Image 
                            class="has-ratio is-rounded"
                            alt="" 
                            width="2000" height="360" src="/assets/heroimage.jpg" frameborder="0" allowfullscreen></Image>
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-4">Akrong Sylvester</p>
                                    <p class="subtitle is-6">@blogwriter
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column"></div>
            </div>
        </section>
    )

}


export default Profile