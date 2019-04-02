import React from 'react';


function OneWorkout(props){
    return(
        <div>
            
         {props.name} 
         <img  src= {props.img} className ="imgContainers"/>
        </div>
    )
}

export default OneWorkout