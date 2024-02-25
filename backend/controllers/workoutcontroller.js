const express=require('express')

const mongoose=require('mongoose')

const Workout= require('../models/workoutmodels')

const getworkouts= async(req,res)=>{
    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)

}
const getworkout=async(req,res)=>{
    const{id}=req.params

    const workout= await Workout.findById(id)

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Such workout'})
    }

    if(!workout){
        return res.status(400).json({error: 'No such workout'})
    }

    res.status(200).json(workout)
}


const createWorkout= async(req,res)=>{
    const {title, loads, reps}=req.body

    let emptyFields=[]

    if(!title){
        emptyFields.push('title')
    }
    if(!loads){
        emptyFields.push('load')
    }
    if(!reps){
        emptyFields.push('reps')
    }

    if(emptyFields.length > 0){
        return res.status(400).json({error: 'Please fill in all the fields',emptyFields})
    }

    try{
        const workout= await Workout.create({title, loads, reps})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error: error.message})

    }
}

const deleteworkout = async (req,res)=>{
    const { id } =req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No workout'})
    }
 
    const workout= await Workout.findOneAndDelete({_id: id})

        if(!workout){
           return res.status(400).json({error: 'No workout'})
        }
        res.status(200).json(workout)
    }

const updateworkout= async(req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId,isValid(id)){
        return res.status(404).json({error: 'No workout'})
    }

    const workout=await Workout.findOneAndUpdate({_id:id},{
        ...req.body
    })

    
}







module.exports= {
    getworkouts,
    getworkout,
    createWorkout,
    deleteworkout,
    updateworkout
}