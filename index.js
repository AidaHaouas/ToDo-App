const express = require('express');
const app = express();
const Port =4001;

app.get('/', (req,res) =>{
    res.send("hello from to do app");
}  );

app.listen(Port, () =>{
    console.log(`Listening on ${Port} for requests`);
}  );

