import { Link } from "react-router-dom";
import Dogs from "../Dogs/Dogs";

const Home = () =>{
    return(
        <div>
            <div>
                <input type='search' name='searchBreed' placeholder="Breed"></input>
                <button>Search</button>
            </div>
            <div>
                <select name='select'>
                    <option value="filterBy" selected>Filter By</option>
                    <option value="temper">Temper</option>
                    <option value="breed">Breed</option>
                </select>
            </div>
            <div>
                <select name='select'>
                    <option value="filterBy" selected>Sort By</option>
                    <option value="temper">Alphabetic</option>
                    <option value="breed">Weight</option>
                </select>
            </div>
            
            <div>
                <Dogs />
            </div>
            <div>

            </div>
        </div>
    )
}

export default Home