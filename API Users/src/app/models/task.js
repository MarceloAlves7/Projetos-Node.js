const bcrypt = require('bcryptjs');
const mongoose = require('../../database')
const Schema = mongoose.Schema

const TaskSchema = new Schema({
    title:{
        type: String,
        require: true,
    },
    Project: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        require: true
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
        
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

const Task = mongoose.model('Task', TaskSchema)

module.exports = Task