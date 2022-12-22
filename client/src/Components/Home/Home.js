import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    getDogs,
    //getDogDetail,
    getTemperaments,
    //createDog,
    //filterByTemp,
    //filterByStored,
    //sortByName,
    //sortByWeight
} from '../../redux/actions';
import { Link } from "react-router-dom";
import DogCard from "../DogCard/DogCard";
//import Loading from '../Loading/Loading';
import image from '../Img/dog.png'

const Home = () =>{
    const dispatch = useDispatch(); //To dispatch actions with this const
    const allDogs = useSelector(state => state.dogs); //Get props from state.dogs
    console.log(allDogs)
    //const allTemps = useSelector(state => state.temperaments);

    useEffect(() =>{
        dispatch(getDogs())
        dispatch(getTemperaments())
    },[dispatch])

    return(
        <div>
            <div>
                <input type='search' name='searchBreed' placeholder="Breed"></input>
                <button>Search</button>
            </div>
            <div>
                <select name='select'>
                    <option defaultValue="filterBy">Filter By</option>
                    <option value="temper">Temper</option>
                    <option value="breed">Breed</option>
                </select>
            </div>
            <div>
                <select name='select'>
                    <option defaultValue="filterBy">Sort By</option>
                    <option value="temper">Alphabetic</option>
                    <option value="breed">Weight</option>
                </select>
            </div>
            <Link to='/create'>
                <div>
                    <h2>Create New Dog</h2>
                </div>
            </Link>
            
            <div>
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
                    temperaments={dog.temps}                 
                />))}
            </div>
            <div>

            </div>
        </div>
    )
}

export default Home