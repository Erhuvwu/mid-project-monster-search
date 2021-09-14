import React from 'react';

function MonsterInfo(props) {
    return (
        <div className='monster-info'>
         <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
      <h2>Name: {props.monster.name}</h2> 
      <h2>Email: {props.monster.email}</h2>   
        </div>
    );
}

export default MonsterInfo;