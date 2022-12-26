import { Link } from 'react-router-dom';
import style from './NotFound.module.css';
import image from '../Img/notfound.jpg'

const NotFound = () =>{
    return(
        <div className={style.NotFoundContainer}>
            <div className={style.NotFoundDescription}>
                <h2>You fall into space!</h2>
                <Link to='/home'>Go back</Link>
            </div>
            <div>
                <img src={image}/>
            </div>
        </div>
    )
}

export default NotFound;