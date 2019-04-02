import React, { Component } from 'react';
import './App.css';
import NavBar from "./Component/NavBar";
import DisplayWorkout from "./Component/DisplayWorkouts/DisplayWorkout";
import SearchBar from "./Component/SearchBar";
import WorkoutList from "./Component/WorkoutList/WorkoutList";
import axios from 'axios';
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      workoutList: []
    }
    this.addWorkout = this.addWorkout.bind(this)
  }
  
    addWorkout (workout){
      const newWorkout = {
        image: workout.img,
        muscles: workout.muscles_targeted
      }
      axios.post('/api/addWorkout', newWorkout).then(res =>{
        console.log("WORKOUT ADDED", res, "CURRENT STATE", this.state.workoutList)
        this.setState({
            workoutList: [...this.state.workoutList, res.data]
        })
      })
    }  
   
   render() {
    
    return (
      <div className="App">
      
      <NavBar/>
      {/* <SearchBar/> */}
      <div className="workout_container">
        <DisplayWorkout workoutList={this.state.workoutList} addToList={this.addWorkout}/>
        <WorkoutList workoutList={this.state.workoutList} /> 
      </div>
      </div>
    );
  }
}

export default App;
