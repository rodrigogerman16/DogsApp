import { Link } from 'react-router-dom';
import style from './NotFound.module.css'

const NotFound = () =>{
    return(
        <div>
            <div>
                <h2>Are you Lost?</h2>
            </div>
            <div>
                <Link to='/home'>Go back</Link>
            </div>
        </div>
    )
}

export default NotFound;