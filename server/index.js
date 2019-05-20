const express = require('express');
const bodyParser = require('body-parser');
const workOutController = require("./controller/workOutController")
const app = express();

app.use(bodyParser.json());

app.get ('/api/workouts', workOutController.getWorkOuts)
app.post('/api/addWorkout', workOutController.addWorkout)
// app.get('/api/workouts/:id', workOutController.)


//CRUD_______
app.post('/api/createWorkout',workOutController.createWorkout)



const PORT = 4001;
app.listen(PORT, () => console.log(`whatver, ${PORT}`));