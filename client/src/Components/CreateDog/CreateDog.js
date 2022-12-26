import style from './CreateDog.module.css'
import image from '../Img/cutedog.jpg'
import { Link } from 'react-router-dom';

const CreateDog = () =>{
    return(
        <div className={style.CreateDogContainer}>
            <div className={style.CreateDogImg}>
                <img src={image} alt='Happy Dog'/>
            </div>
            <div className={style.CreateDogForm}>
                <form>
                    <label name='name'>Breed Name</label>
                    <input type='text' name='name'/>

                    <label name='temperaments'>Temperaments</label>
                    <input type='select' name='temperaments' placeholder=' eg: Independent, Happy'/>

                    <label name='image'>Image</label>
                    <input type='url' name='image'/>
                    
                    <div className={style.SmallInputContainer}>
                        <div className={style.CollumnInputs}>
                            <label name='min-height'>Min Height</label>
                            <input type='number' name='min-height'/>
                        </div>
                        <div className={style.CollumnInputs}>
                            <label name='max-height'>Max Height</label>
                            <input type='number' name='max-height'/>
                        </div>                        
                    </div>

                    <div className={style.SmallInputContainer}>
                        <div className={style.CollumnInputs}>
                            <label name='min-weight'>Min Weight</label>
                            <input type='number' name='min-weight'/>
                        </div>
                        <div className={style.CollumnInputs}>
                            <label name='max-weight'>Max weight</label>
                            <input type='number' name='max-weight'/>
                        </div>                        
                    </div>   

                    <label name='life-span'>Life Span</label>
                    <input type='text' name='life-span' placeholder=' eg: 11 - 15 years'/>

                    <div className={style.FormBtns}>
                        <Link to='/home'>Home</Link>
                        <input type='submit' value='Create'/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateDog;