const bcrypt = require('bcryptjs');
const mongoose = require('../database')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        require: true,
        select: false
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});


    UserSchema.pre('save', async function(next){ 
        
        const hash = await bcrypt.hash(this.password, 10);
        this.password = hash;
        console.log(hash)

        next()
    })

const Item = mongoose.model('User', UserSchema)

module.exports = Item