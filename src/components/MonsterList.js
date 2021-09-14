import React from 'react';
import MonsterInfo from './MonsterInfo';

function MonsterList(props) {
    return (
        <div className='monster-list'>
            {
                props.monsters.length > 0 ?
                    props.monsters.map(monster => (

                        <MonsterInfo key={monster.id} monster={monster} />

                    ))
                    : <h2>Invalid Monster Name</h2>
            }
        </div>
    );
}

export default MonsterList;