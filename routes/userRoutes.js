const express=require('express');
const route=express.Router();
const cors=require('cors');
const upload = require("../middleware/upload");


const controller=require('../controller/userController');

route.get('/users',controller.getUser);

route.post('/users',upload.fields([{
    name: 'self', maxCount: 1
  }, {
    name: 'adhaar', maxCount: 1
  },{
      name: 'pan', maxCount:1
  },{
      name:'bankPass', maxCount:1
  }]),controller.createUser);

route.get('/userByName',controller.getUserByName);

route.get('/userByPhoneNumber',controller.getUserByPhoneNumber);

module.exports=route;