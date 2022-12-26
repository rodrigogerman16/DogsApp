import style from './DogCard.module.css'
import imageSecondary from '../Img/dog.png'
import { Link } from 'react-router-dom'

const DogCard = ({name, temperaments, image, weightMin, weightMax, id}) =>{
    return(
        
            <div className={style.DogCardContainer}>
                <div className={style.DogCardImg}>
                    <img src={image ? image : imageSecondary} alt='Dog Profile'/>
                </div>
                <div className={style.DogCardDescription}>
                <Link to={`/dog/${id}`}><h2>{name}</h2></Link>
                <p>{temperaments && typeof temperaments[0] === 'object'? temperaments?.map(t=>(
                 t.name + ', '
                )):temperaments?.join(', ')}</p>
                {console.log(temperaments)}
                <div className={style.DogCardWeight}>
                    <p>Min Weight: {weightMin}kg</p>
                    <p>Max Weight: {weightMax}kg</p>
                </div>                    
                </div>           
            </div>
       
    )
}

export default DogCard