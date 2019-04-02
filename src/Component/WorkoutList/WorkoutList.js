import React from "react";

// (props) contains all the data passed from App
export default function WorkoutList(props) {
    console.log("PROPS", props)
  // mapping over all the workouts from workoutList
  let mappedWorkouts = props.workoutList.map(workout => {
      console.log("workout", workout)
    // returning each workout with its information 
    return (
        <div className="mapped_workouts" key={workout.id} style={{color: "white"}}>
            <img src={workout.image} alt="" />
            <h1> Muscles Worked: {workout.muscles}</h1>
      </div>
    );
  });

  return <div>{mappedWorkouts}</div>;
}

