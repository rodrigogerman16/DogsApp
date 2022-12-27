import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    getDogs,
    getTemperaments,
    //createDog,
} from '../../redux/actions';
import DogCard from "../DogCard/DogCard";
import image from '../Img/dog.png'
import style from './Home.module.css';
import Loading from '../Loading/Loading';
import Pagination from '../Pagination/Pagination';
import NavBar from '../NavBar/NavBar';

const Home = () =>{

    const dispatch = useDispatch();

    const allDogs = useSelector(state => state.dogs);  
    
    const [/*_orden*/, setOrden] = useState('');   

    //Pagination States
    const[currentPage, setCurrentPage] = useState(1);
    const[postPerPage] = useState(8)
    //

    //Get current Cards
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = allDogs.slice(indexOfFirstPost, indexOfLastPost);
    //

    //Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    //    
    
    useEffect(() =>{
        dispatch(getDogs())
        dispatch(getTemperaments())
    },[dispatch])

    return(
        <div>
            {allDogs.length ?

            <div className={style.HomeContainer}>                 
                <NavBar 
                    setCurrentPage={setCurrentPage}
                    setOrden={setOrden} 
                />
                
                <div className={style.AllDogsContainer}>
                    {currentPosts.map(dog => (<DogCard 
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

                <Pagination 
                postPerPage={postPerPage}
                totalPosts={allDogs.length}
                paginate={paginate}
                />
            </div>
            
            : <Loading/>
            }
        </div>
    )
}

export default Home