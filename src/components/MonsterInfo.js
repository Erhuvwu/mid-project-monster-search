import React from 'react';

function MonsterInfo(props) {
    return (
        <div className='monster-info'>
         <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
      <h3>Name: {props.monster.name}</h3> 
      <h3>Email: {props.monster.email}</h3>   
        </div>
    );
}

export default MonsterInfo;