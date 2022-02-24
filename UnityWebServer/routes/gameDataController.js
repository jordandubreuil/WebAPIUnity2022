var GameTest = require('../models/GameTest')


module.exports.getAllGameData = function(req,res){
    GameTest.find().then(function(gamedata){
      console.log(gamedata)
      res.json(gamedata)
    })
}

module.exports.getOneByName = function(req,res){
    console.log("Selected by myName!", req.query.name);
    GameTest.findOne({"myName":req.query.name}).then(function(gamedata){
      console.log(gamedata)
      res.json(gamedata)
    })
}

module.exports.saveEntry = function(req,res){
    var errors = []
    
    if(req.body.myName == ""){
      errors.push({text:"Name Not added"})
    }
    if(req.body.myScore == 0){
      errors.push({text:"No Score Added"})
    }
    if(req.body.myHealth == 0){
      errors.push({text:"No Health Added"})
    }
    //if there are errors don't validate if there aren't log and save data
    if(errors.length > 0){
      console.log({
        errors:errors
      })
    }else{
      console.log("Hello from Unity Post ", req.body)
      var gameTestData = {
        myName:req.body.myName,
        myScore:req.body.myScore,
        myHealth:req.body.myHealth,
        isDead:req.body.isDead
      }
      console.log(gameTestData)
      new GameTest(gameTestData).save().then(function(data){
        console.log("Data Saved")
      }).catch(function(err){
        console.log(data)
      })
    }
    
  }