var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const { json } = require('body-parser');

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended:true}))
router.use(express.json())

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Joe' });
});

router.get('/unity', function(req,res){
    console.log("Hello from Unity!", req.query.name);
})

router.post('/unityPost', function(req,res){
  console.log("Hello from Unity Post ", req.body)
})

module.exports = router;
