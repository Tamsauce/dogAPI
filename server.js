const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000  
const MongoClient = require('mongodb').MongoClient 


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://DoggieDog:<password>@cluster0.fajr4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });




app.use(cors())  //cross origin request CORS 

let rappers = {
    '21 savage':{
        'age': 28,
        'birthName': 'Gizmo',
        'birthLocation': "California",
    },
  
    'chance':{
        'age': 28,
        'birthName': 'chanceychance',
        'birthLocation': "San Fran",
    },

    'gizmo':{
        'age': 1.5,
        'birthName': 'Gizmo',
        'birthLocation': "California",
    },

    'unknown':{
        'age': 1,
        'birthName': 'unknown',
        'birthLocation': "unknown",
    }


}


app.get('/', (request, response) => {
    response.sendFile(__dirname +'/index.html')
})

app.get('/api/rappers/:rapperName', (request, response) => {
    const rapName = request.params.rapperName.toLowerCase()
    console.log(rapName)
    if (rappers[rapName]){
        response.json(rappers[rapName])
    }else{
        response.json(rappers['unknown'])
    }
   
})

app.listen(process.env.PORT || PORT, () => {
    console.log (`Server running on port ${PORT}`)
})































