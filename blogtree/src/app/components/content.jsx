import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'


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
        
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum dolorem excepturi similique doloremque nostrum soluta tenetur vero obcaecati, sed recusandae veniam autem rerum cumque ab aliquam aspernatur officiis, necessitatibus fugit rem ex quibusdam, magni enim odio iusto. Alias qui quae provident quidem quo tenetur quod animi obcaecati ad architecto eum perferendis, enim maiores corporis quia labore facilis laboriosam nemo quis ipsum cupiditate, recusandae a pariatur. Recusandae itaque at quidem aspernatur doloremque rem incidunt excepturi ipsam quos similique adipisci, reiciendis expedita quas repellendus explicabo temporibus necessitatibus consequatur molestias ea tempore inventore veniam nulla. Minus fuga dolor doloremque laudantium excepturi placeat odio?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum dolorem excepturi similique doloremque nostrum soluta tenetur vero obcaecati, sed recusandae veniam autem rerum cumque ab aliquam aspernatur officiis, necessitatibus fugit rem ex quibusdam, magni enim odio iusto. Alias qui quae provident quidem quo tenetur quod animi obcaecati ad architecto eum perferendis, enim maiores corporis quia labore facilis laboriosam nemo quis ipsum cupiditate, recusandae a pariatur. Recusandae itaque at quidem aspernatur doloremque rem incidunt excepturi ipsam quos similique adipisci, reiciendis expedita quas repellendus explicabo temporibus necessitatibus consequatur molestias ea tempore inventore veniam nulla. Minus fuga dolor doloremque laudantium excepturi placeat odio?
        </p>

        </div>
        </section>
    )
}




export default Content