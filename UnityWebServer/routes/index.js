var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const { json } = require('body-parser');

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended:true}))
router.use(express.json())

require("../models/GameTest")
var GameTest = mongoose.model('gameTest')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Joe' });
});

router.get('/unity', function(req,res){
    console.log("Hello from Unity!", req.query.name);
})

router.post('/unityPost', function(req,res){
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
      name:req.body.myName,
      score:req.body.myScore,
      health:req.body.myHealth,
      isDead:req.body.isDead
    }
    console.log(gameTestData)
    new GameTest(gameTestData).save().then(function(data){
      console.log("Data Saved")
    }).catch(function(err){
      console.log(data)
    })
  }
  
})

module.exports = router;
