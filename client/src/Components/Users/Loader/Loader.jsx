import React from 'react';
import LoaderImg from "../../../images/loader.svg";
import "./Loader.css";

const LoaderUser = () => {
  return (
    <div className='loader flex flex-c'>
      <img src = {LoaderImg} alt = "loader" />
    </div>
  )
}

export default LoaderUser