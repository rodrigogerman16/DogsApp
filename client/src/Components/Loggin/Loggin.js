import style from './Loggin.module.css'

const Loggin = () =>{
    return(
        <div className={style.LogginContainer}>
            <div className={style.LogginImg}>
                <img src='./loggin1.png' alt='Dog Image'/>  
            </div>
            <div className={style.LogginDescription}>
                <h2>Hi DogLover!</h2>
                <p>Do you want to search dogs and know more about them?</p>
                <p>This is the webpage for you</p>
                <button>JOIN</button>
            </div>
        </div>  
    )
}

export default Loggin