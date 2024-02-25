require('dotenv').config()

const express= require('express')

const mongoose= require('mongoose')

const workoutrouts= require('./routes/workouts')

const app=express()

app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

app.use('/api/workouts',workoutrouts)

mongoose.connect(process.env.MONGO_UI)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log('listening to port', process.env.PORT,' & db')
        })

    })
    .catch((error)=>{
        console.log(error)
    })
