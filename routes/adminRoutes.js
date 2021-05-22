const express=require('express');
const route=express.Router();
const cors=require('cors');

const controller = require('../controller/adminController');

route.get('/admin',controller.getAdmin);

route.post('/admin',controller.createAdmin);

route.patch('/admin',controller.updateAdminById);

module.exports=route;
