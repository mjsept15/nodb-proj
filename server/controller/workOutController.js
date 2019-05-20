const data = require ("../data/data.json")

let myWorkouts = [];
let id = 0;

module.exports = {
//create
createWorkout: (req,res,next)=>{
    let dataInfo = {
        "workout": req.body.workout,
        "muscles_targeted": req.body.muscles_targeted,
        "img": req.body.img,
    }
    data.create(dataInfo, function(err,data){
        if(err){
            return next(err)
        }else{
            return res.sendStatus(200)
        }
    })
    },



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
    },
  
   

    //update

    //delete

}