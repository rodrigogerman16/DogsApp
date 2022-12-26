import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    getDogs,
    getTemperaments,
    //createDog,
    //filterByTemp,
    //filterByStored,
    //sortByName,
    //sortByWeight
} from '../../redux/actions';
import { Link } from "react-router-dom";
import DogCard from "../DogCard/DogCard";
import image from '../Img/dog.png'
import style from './Home.module.css';
import Loading from '../Loading/Loading';

const Home = () =>{

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getDogs())
        dispatch(getTemperaments())
    },[dispatch])

    const allDogs = useSelector(state => state.dogs); 
    const allTemps = useSelector(state => state.temperaments);

    return(
        <div>
            {allDogs.length >1 ?
            <div className={style.HomeContainer}> 
                <div className={style.NavBarContainer}>
                    <div>
                        <input type='search' name='searchBreed' placeholder="Breed..."></input>
                        <button>Search</button>
                    </div>
                    <div>
                        <select name='breedSelect' className={style.Aux}>
                            <option value="" selected disabled hidden>Breeds</option>
                            <option value="api">API</option>
                            <option value="created">Created</option>
                        </select>
                    </div>
                    <div>
                        <select name='tempSelect'>
                            <option value="" selected disabled hidden>Temperaments</option>
                            <option value="temper">All</option>
                            {allTemps.map(temp => <option value="breed" key={temp.id}>{temp.name}</option>)}
                        </select>
                    </div>
                    <div>
                        <select name='sortSelect'>
                            <option value="" selected disabled hidden>Sort By</option>
                            <option value="asc">Alphabetic A-Z</option>
                            <option value="desc">Alphabetic Z-A</option>
                            <option value="asc">+ Weight</option>
                            <option value="desc">- Weight</option>
                        </select>
                    </div>
                    <Link to='/create'>
                        <div>
                            <p>Create New Dog</p>
                        </div>
                    </Link>
                </div>
                
                <div className={style.AllDogsContainer}>
                    {allDogs.map(dog => (<DogCard 
                        key={dog.id}
                        id={dog.id}
                        name={dog.name}
                        heightMin={dog.heightMin}
                        heightMax={dog.heightMax}
                        weightMin={dog.weightMin}
                        weightMax={dog.weightMax}
                        life_span={dog.life_span}
                        origin={dog.origin}
                        image={dog.image ? dog.image : image}   
                        temperaments={dog.temper}                 
                    />))}
                </div>
            </div>
            : <Loading/>
            }
        </div>
    )
}

export default Home