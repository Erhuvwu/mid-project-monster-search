import React from 'react';

const SearchBox=(props)=>(
<div className='search'>
    <input 
    type='search' 
    placeholder={props.placeholder}
    onChange={props.handleChange}
    />
    </div>

)
export default SearchBox;