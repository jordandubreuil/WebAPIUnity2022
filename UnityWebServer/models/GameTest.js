var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var GameTestSchema = new Schema({
    myName:{
        type:String,
        required:true
    },
    myScore:{
        type:Number
    },
    myHealth:{
        type:Number
    },
    isDead:{
        type:Boolean
    }
})

module.exports =  mongoose.model('gameTest', GameTestSchema)