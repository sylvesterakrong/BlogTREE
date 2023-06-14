import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons"


const create_blog = () => {
    return(
        <section>
           <div className="columns">
            <div className="column is-2"></div>
                <div className="column card has-ratio px-3 py-3 m-5">
                    <div>
                        <h1 className="is-size-3">Write a blog✨...</h1>
                    </div>
                    <div>
                        <input className="input mt-2"
                        placeholder="What's on your mind⁺˚⋆｡°✩₊"/>
                    </div>
                    <div>
                        <textarea className="textarea mt-5" placeholder="Feel free and express your thoughts✎ᝰ.."/>
                    </div>
                    <div>
                        <button className="button mt-3 is-link is-light is-outlined" type="submit">Post blog</button>
                    </div>
                    <div>
                        <button className="button is-danger is-light is-outlined mt-6
                        ">DELETE <FontAwesomeIcon icon={faTimesCircle}className="icon is-small ml-2
                        " type="delete"/></button>
                    </div>
                </div>
                <div className="column is-2"></div>
           </div>
        </section>
    )
}

export default create_blog