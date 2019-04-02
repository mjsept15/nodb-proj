import React from 'react';
import "./gymList.css";


export default function gymList(props){
let mappedGym = props.gymList.map(Gym =>{
    return (
        <div key={Gym.id}>
            <h1>{gym.workout}</h1>
            <h2>{gym.muscles-targeted}</h2>
            <button onClick={()
                => props.GymSearch(Gym)}>
                Gym Search
                </button>
        </div>
    )
})

return <div>{mappedGym}</div>
}
