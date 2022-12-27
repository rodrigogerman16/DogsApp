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
                    <h2>{name}</h2>
                    <p>{temperaments && typeof temperaments[0] === 'object'? temperaments?.map(t=>(
                    t.name + ', '
                    )):temperaments?.join(', ')}</p>
                    <div className={style.DogCardWeight}>
                        <span className={style.WeightLeft}>Min Weight: {weightMin}kg</span>
                        <span className={style.WeightRight}>Max Weight: {weightMax}kg</span>
                    </div>                                        
                </div>   
                <Link to={`/dog/${id}`}><h4>More Info</h4></Link>                        
            </div>
       
    )
}

export default DogCard