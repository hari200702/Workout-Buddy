const express=require('express')

const Workout=require('../models/workoutmodels.js')

const { getworkouts, getworkout, createWorkout, deleteworkout, updateworkout } = require('../controllers/workoutcontroller')

const router= express.Router()

router.get('/',getworkouts)

router.get('/:id',getworkout)

router.post('/', createWorkout)

router.delete('/:id', deleteworkout)

router.patch('/:id', updateworkout)



module.exports = router 