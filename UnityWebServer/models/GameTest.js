var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var GameTestSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    score:{
        type:Number
    },
    health:{
        type:Number
    },
    isDead:{
        type:Boolean
    }
})

mongoose.model('gameTest', GameTestSchema)