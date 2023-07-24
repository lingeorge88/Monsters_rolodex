import React from 'react';
import './search-box.styles.css';

const SearchBox = ({className, placeholder, changeHandler}) => {
  return (
    <input className={`search-box ${className}`} type='search' placeholder={placeholder} onChange={changeHandler}/>
  )
}

export default SearchBox;