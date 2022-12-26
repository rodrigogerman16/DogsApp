import style from './Loading.module.css';
import loading from '../Img/loading.gif';
import dogImg from '../Img/dog.png';

const Loading = () =>{
    return(
        <div className={style.LoadingContainer}>
            <img src={dogImg} alt='Dog Logo'/>
            <img src={loading} alt='Loading'/>
        </div>
    );
};

export default Loading;