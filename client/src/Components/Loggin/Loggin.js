import style from './Loggin.module.css'
import { Link } from 'react-router-dom'
import image from '../Img/Loggin.png'

const Loggin = () =>{
    return(
        <div className={style.LogginContainer}>
            <div className={style.LogginImg}>
                <img src={image} alt='Dogs'/>  
            </div>
            <div className={style.LogginDescription}>
                <h2>WoofFinder</h2>
                <h4>Search, create and know more about them!</h4>
                <Link to='home'>JOIN</Link>
            </div>
        </div>  
    )
}

export default Loggin