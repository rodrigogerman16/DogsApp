import React from "react";
import style from './Pagination.module.css';

const Pagination = ({postPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++){
        pageNumbers.push(i);
    }
    return(
        <nav>
            <ul className={style.PaginationContainer}>{pageNumbers.map(number =>(
                <li key={number}>
                    <button onClick={() => paginate(number)}>
                        {number}
                    </button>
                </li>
            ))}
            </ul>
        </nav>
    )
}

export default Pagination