import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './CreateDog.module.css';
import image from '../Img/cutedog.jpg';
import { Link, useHistory } from 'react-router-dom';
import { getTemperaments, createDog } from '../../redux/actions';

const validate = (input)=>{
    let errors ={};
    if(!input.name) errors.name = 'Name is required'
    if(input.name && input.name.length < 3) errors.name = 'Name must contain between 3 and 30 characters'
    if(input.name && input.name.length > 30) errors.name = 'Name must contain between 3 and 30 characters'
    if(input.name && !/^[a-zA-Z\s]+$/.test(input.name)) errors.name = 'Invalid name, must only contain letters'
    if(!input.temperaments.length) errors.temperaments = 'Choose a temperament'
    if(input.temperaments.length > 6) errors.temperaments = `You can't select more than 7 temperaments`
    if(input.weightMin < 1)errors.weightMin = 'Value must be a positive number'
    if(input.weightMin > 70 )errors.weightMin = 'Min value must be less than 70 kg'
    if(parseInt(input.weightMin) > parseInt(input.weightMax)) errors.weightMin = 'Min value must be less than Max value'
    if(input.weightMax < 1 )errors.weightMax = 'Value must be a positive number'
    if(input.weightMax > 100)errors.weightMax = 'Max value must be less than 100 kg'
    if(parseInt(input.weightMax) < parseInt(input.weightMin))errors.weightMax = 'Max value must be higher than Min value'
    if(input.heightMin < 1 )errors.heightMin = 'Value must be a positive number'
    if(input.heightMin > 100)errors.heightMin='Min value must be less than 100 kg'
    if(parseInt(input.heightMin) > parseInt(input.heightMax))errors.heightMin = 'Min value must be less than Max value'
    if(input.heightMax < 1 )errors.heightMax = 'Value must be a positive number'
    if(input.heightMax > 150)errors.heightMax='Max value must be less than 150 kg'
    if(parseInt(input.heightMax) < parseInt(input.heightMin))errors.heightMax = 'Max value must be higher than Min value'
    if(input.lifespan < '1') errors.lifespan = 'The age must be a positive number '
    if(input.lifespan > '80')errors.lifespan = 'the value must be less than 80 years'
    return errors
}

const CreateDog = () =>{
    const dispatch = useDispatch();
    const history = useHistory();
    const temperaments = useSelector((state) => state.temperaments);
    const [input, setInput] = useState({
        name: '',        
        heightMin: 0,
        heightMax: 0,
        weightMin: 0,
        weightMax: 0,
        life_span: '',
        image: '',
        temperaments: []
    });
    console.log(input)
    const [errors, setErrors] = useState({
        name: '',        
        heightMin: 0,
        heightMax: 0,
        weightMin: 0,
        weightMax: 0,
        life_span: '',
        image: '',
        temperaments: ""
    });
    console.log(errors)

    useEffect(()=>{
        dispatch(getTemperaments());
    },[dispatch]);

    function handleChange(e){
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
    }

    function handleSubmit(e){
        e.preventDefault()
        if(!errors.name && !errors.weightMin && !errors.weightMax && !errors.heightMin && !errors.heightMax && input.name !== ""){
        dispatch(createDog(input))
        alert('Dog Created')
        history.push('/home')
        }
        else alert('Missing info')
    }

    function handleTemperaments(e){
        setInput({
            ...input,
            temperaments: input.temperaments.includes(e.target.value) ? 
            input.temperaments : 
            [...input.temperaments, e.target.value]
        })
    }

    function handleDelete(e){
        e.preventDefault()
        setInput({
            ...input,
            temperaments: input.temperaments.filter(temp => temp !== e.target.id)
        })
    };

    return(
        <div className={style.CreateDogContainer}>
            <div className={style.CreateDogImg}>
                <img src={image} alt='Happy Dog'/>
            </div>
            <div className={style.CreateDogForm}>
                <span></span>
                <form onSubmit={e => handleSubmit(e)}>

                    <label>Breed Name</label>
                    <input 
                    type='text' 
                    name='name'
                    value={input.name}
                    onChange={e =>handleChange(e)}
                    />
                    {errors.name && (
                        <p className={style.Error}>{errors.name}</p>
                    )}

                    <label>Temperaments</label>
                    <select onChange={handleTemperaments}> 
                        <option selected disabled/>
                        {temperaments?.map((temp)=>(
                            <option value={temp.name}>
                                {temp.name}
                            </option>
                        ))}   
                        
                        {errors.temperaments && (
                            <p className={style.Error}>{errors.temperaments}</p>
                        )}             
                    </select>
                    <ul>
                        {input.temperaments.map(temp=>(
                            <li key={temp} >
                                {temp}
                                <button  id={temp} type='button' onClick={e => handleDelete(e)} >X</button>
                            </li>
                        ))}
                    </ul>

                    <label>Image</label>
                    <input 
                    type='text' 
                    name='image' 
                    placeholder='Url...'
                    value={input.image}
                    onChange={e => handleChange(e)}
                    />
                    {errors.image && (
                        <p className={style.Error}>{errors.image}</p>
                    )}
                    
                    <div className={style.SmallInputContainer}>
                        <div className={style.CollumnInputs}>
                            <label>Min Height</label>
                            <input 
                            type='number' 
                            name='heightMin'
                            value={input.heightMin}
                            onChange={e => handleChange(e)}
                            />
                            {typeof errors.heightMin === "string" && (
                                <p className={style.Error}>{errors.heightMin}</p>
                            )}
                        </div>
                        <div className={style.CollumnInputs}>
                            <label>Max Height</label>
                            <input 
                            type='number' 
                            name='heightMax'
                            value={input.heightMax}
                            onChange={e => handleChange(e)}
                            />
                            {typeof errors.heightMax === "string" && (
                                <p className={style.Error}>{errors.heightMax}</p>
                            )}
                        </div>                        
                    </div>

                    <div className={style.SmallInputContainer}>
                        <div className={style.CollumnInputs}>
                            <label>Min Weight</label>
                            <input 
                            type='number' 
                            name='weightMin'
                            value={input.weightMin}
                            onChange={e => handleChange(e)}
                            />
                            {typeof errors.weightMin === "string" && (
                                <p className={style.Error}>{errors.weightMin}</p>
                            )}
                        </div>
                        <div className={style.CollumnInputs}>
                            <label>Max weight</label>
                            <input 
                            type='number'
                            name='weightMax'
                            value={input.weightMax}
                            onChange={e => handleChange(e)}
                            />
                            {typeof errors.weightMax === "string" && (
                                <p className={style.Error}>{errors.weightMax}</p>
                            )}
                        </div>                        
                    </div>   

                    <label>Life Span</label>
                    <input 
                    type='text' 
                    name='life_span' 
                    placeholder=' eg: 11 - 15 years'
                    onChange={e => handleChange(e)}
                    />
                    {errors.life_span && (
                        <p className={style.Error}>{errors.life_span}</p>
                    )}

                    <div className={style.FormBtns}>
                        <Link to='/home'>Home</Link>
                        <button type='submit'>Create</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateDog;