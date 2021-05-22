const express=require('express');
const route=express.Router();
const cors=require('cors');


const controller=require('../controller/userController');

route.get('/users',controller.getUser);

route.post('/users',controller.createUser);

route.get('/userByName',controller.getUserByName);

route.get('/userByPhoneNumber',controller.getUserByPhoneNumber);

module.exports=route;