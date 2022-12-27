import style from './DogDetail.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDogDetail } from '../../redux/actions';
import Loading from '../Loading/Loading'
import { Link } from 'react-router-dom';

const DogDetail = (props) =>{
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDogDetail(props.match.params.id));        
    },[dispatch])

    const selectedDog = useSelector((state) => state.dogs);
    const dog = selectedDog[0]
    console.log(dog)
    return(
        
        <div>
            {selectedDog.length ?
            <div className={style.DogDetailContainer}>
                <div className={style.DogDetail}>
                    <div> 
                        <img src={dog.image} alt='Dog Profile'/>
                    </div>
                    <div>
                        <h2>{dog.name}</h2> 
                        <p>{dog.createdInDb === true ? dog.temper.map(t => t.name) : dog.temper.join(', ')}</p>
                        <div>
                            <p>Weight: {dog.weightMin}kg - {dog.weightMax}kg</p>
                        </div>
                        <div>
                            <p>Height: {dog.heightMin}cm - {dog.heightMax}cm</p>
                        </div>
                        <div>
                            <p>Life Span: {dog.life_span}</p>
                        </div>
                    </div>
                    <div className={style.HomeAndCreateLinks}>
                        <Link to='/home'>Home</Link>
                        <Link to='/create'>Create</Link>
                    </div>
                </div>               
            </div>
            : <Loading/>}
            
        </div>
    )
}

export default DogDetail;