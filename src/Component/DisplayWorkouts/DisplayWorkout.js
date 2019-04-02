import React, {Component} from 'react'
import {Button, Collapse, Card, CardBody,CardImg} from "reactstrap";
import Axios from 'axios';
import OneWorkOut from '../OneWorkout/OneWorkout'

class DisplayWorkout extends Component{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { 
            collapse: false,
            workout:[]
        };
        
      }
      componentDidMount(){
            this.getWorkouts()
           }
           getWorkouts = () =>{
                    Axios.get('/api/workouts').then(res =>{
                       
                       this.setState({
                            workouts: res.data.results
                        })
                     }) 
                       
                }
        
    
      toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
      }
    render(){
        return(
        
        <div className ="divback">
        {this.state.workouts && this.state.workouts.map(workout => 
        
        <Card className="inTheWay">
        <OneWorkOut 
                    
                img = {workout.img}/>
            <h2>Muscles Targeted: {workout.muscles_targeted}</h2>
            <Button color="primary" onClick={() => this.props.addToList(workout)}>Add Workout</Button>
        <Button color="primary" onClick={this.toggle}  style={{ marginBottom: '1rem' }}  >Toggle</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>                
            <h1>{workout.workout}</h1>
            </CardBody>
          </Card>
        </Collapse>
        </Card>
            )}
           </div>
       
        )
        }
    }    
        
    export default DisplayWorkout;




