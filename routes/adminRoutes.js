const express=require('express');
const route=express.Router();
const cors=require('cors');
const upload = require("../middleware/upload");

const controller = require('../controller/adminController');

route.get('/admin',controller.getAdmin);

route.post('/admin',upload.single("file"),controller.createAdmin);

route.patch('/admin',upload.single("file"),controller.updateAdminById);

module.exports=route;
