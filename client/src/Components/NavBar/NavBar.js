import React, {useState, useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { getDogs,
    filterByTemp,
    filterByStored,
    sortByName,
    sortByWeight,
    getTemperaments } from "../../redux/actions"
import style from './NavBar.module.css'
import { Link } from "react-router-dom";

const NavBar = ({setCurrentPage, setOrden}) =>{    
    const dispatch = useDispatch();
    const [name, setName] = useState('')
    
    const allTemps = useSelector(state => state.temperaments);

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value);
    }    

    function handleSortByName(e) {
        e.preventDefault();        
        setCurrentPage(1);        
        setOrden(e.target.value);
        dispatch(sortByName(e.target.value));
    }

    function handleSortByWeight(e) {
        e.preventDefault();        
        setCurrentPage(1);
        setOrden(e.target.value);
        dispatch(sortByWeight(e.target.value));
    }

    function handleFilterByStored(e) {
        e.preventDefault();        
        setCurrentPage(1);
        setOrden(e.target.value);
        dispatch(filterByStored(e.target.value));
    }

    function handleFilterByTemps(e){
        e.preventDefault();        
        setCurrentPage(1);
        setOrden(e.target.value);
        dispatch(filterByTemp(e.target.value));
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(getDogs(name));
        setCurrentPage(1);
     }

     useEffect(() =>{
        dispatch(getDogs())
        dispatch(getTemperaments())
    },[dispatch])

    return(
        <div className={style.NavBarContainer}>
            <div>
                <input 
                type='search' 
                placeholder="Breed..."
                onChange={e => handleInputChange(e)}
                value={name}
                />

                <button
                type="search"
                onClick={e => handleSubmit(e)}>
                    Search
                </button>
            </div>
            
            <div>
                <select onChange={e => handleFilterByStored(e)}>
                    <option value="" selected disabled hidden>Breeds</option>
                    <option value="all">ALL</option>
                    <option value="api">API</option>
                    <option value="db">Created</option>
                </select>
            </div>

            <div>
                <select onChange={e => handleFilterByTemps(e)}>
                    <option value="" selected disabled hidden>Temperaments</option>
                    <option value="all">All</option>
                    {allTemps.map(temp => <option value={temp.name} key={temp.id}>{temp.name}</option>)}
                </select>
            </div>
            
            <div>
                <select onChange={e => handleSortByName(e)}>
                    <option selected disabled hidden>Name</option>
                    <option value="asc" >A-Z</option>
                    <option value="desc">Z-A</option>
                </select>
            </div>

            <div>
                <select onChange={e => handleSortByWeight(e)}>
                    <option value='selected' selected disabled hidden>Weight</option>
                    <option value="asc">Lowest</option>
                    <option value="desc">Highest</option>
                </select>
            </div>   

            <div>
                <Link to='/create'>
                        <span>+</span>
                </Link>
            </div>
        </div>
    )
}

export default NavBar