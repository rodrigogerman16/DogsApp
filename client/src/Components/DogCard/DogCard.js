import style from './DogCard.module.css'
import imageSecondary from '../Img/dog.png'
import { Link } from 'react-router-dom'

const DogCard = ({name, temps, image, weightMin, weightMax, id}) =>{
    return(
        <Link to={`/dog/${id}`}>
            <div className={style.DogCardContainer}>
                <div>
                    <img src={image ? image : imageSecondary} alt='Dog Profile'/>
                </div>
                <div>
                    <p>{name}</p>
                    {temps.forEach(temp => <p>{temp}</p>)}
                    <p>{weightMin}</p>
                    <p>{weightMax}</p>
                </div>           
            </div>
        </Link>
    )
}

export default DogCard