var express = require('express');
var router = express.Router();

const {findUsers,saveUser,updateUser,destroyUser} = require('../service/v1/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.query);
  findUsers(req.query)
  .then((data)=>{
    res.send({data : data});
  })
  .catch((err)=>{
    res.send(err);
  })
});

router.post('/',(req,res,next)=>{
  console.log(req.body);
  saveUser(req.body)
  .then((data)=>{
    res.send({data : data});
  })
  .catch((err)=>{
    res.send(err);
  })
});

router.put('/',(req,res,next)=>{
  console.log(req.body);
  updateUser(req.body)
  .then((data)=>{
    res.send({data : data});
  })
  .catch((err)=>{
    res.send(err);
  })
});

router.delete('/',(req,res,next)=>{
  console.log(req.body);
  destroyUser(req.body)
  .then((data)=>{
    res.send({data : data});
  })
  .catch((err)=>{
    res.send(err);
  })
});

module.exports = router;
