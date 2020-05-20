import React from "react";
import PreloaderImg from '../../../img/Preloader.svg'
import c from './Preloader.css'


let Preloader = (props) => {

    return <div className={c.preloader}>
         <img className={c.preloaderImg} src={PreloaderImg}/>
    </div>

};

export default Preloader;