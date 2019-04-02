import React, {Component} from 'react'
import Axios from 'axios';


class SearchBar extends Component{
    state = {
        filterItem: '',

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
    workoutFilter = (e) =>{
        this.setState({
            filterItem : e.target.value
        })
    }
    render(){
      

        console.log(this.state.workouts)

        return(
            <div>
                <input placeholder= 'search'
            ></input>
            </div>
        )
    }
}

export default SearchBar;
