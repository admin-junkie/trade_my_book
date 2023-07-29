const express = require('express');

const app = express();

const data = [
    {
        id:1,
        name:'Admin',
        position:"CEO"
    },
    {
        id:2,
        name:'Adin',
        position:"CEO"
    },
    {
        id:3,
        name:'Admin',
        position:"CEO"
    }
]
app.get('/', (req,res)=>{
    res.send(data)
})

app.listen(5000, () => {

    console.log('listening on port 5000');
})