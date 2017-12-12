const express = require('express');

// const PORT = process.env.PORT;
const PORT = 8080;

const app = express();

app.listen(process.env.PORT, function(){
   console.log("listening to port 8080"); 
});

app.get('/', (req,res) => {
   res.send('Hello World'); 
});

