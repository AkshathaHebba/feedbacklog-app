import {FaQuestion} from 'react-icons/fa' //Fount awesome library
import {Link} from 'react-router-dom'

function AboutIconLink(){
    return(
        <div className='about-link'>
            <Link to={{ //The internal links will be used like this(avoids refresh - happens on client side).
                        // Use object instead defined with pathNmae can be used to add other params to the link
                pathname:'/about',
                //search: ?sort=name,
            }}>
                <FaQuestion size={30}/>
            </Link>
        </div>
    )
}
export default AboutIconLink;