const data = require ("../data/data.json")

let myWorkouts = [];
let id = 0;


module.exports = {
    getWorkOuts: (req,res) => {
        res.status(200).send(data)
    },

    // destructuring 
    addWorkout: (req, res) => {
        const { image, muscles } = req.body

        const newWorkout = {
            id, image, muscles    
          };

          myWorkouts.push(newWorkout);
          id++;  
          res.status(200).send(newWorkout);
      
      

    }
}