const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    bankAccountname:String,
    bankAccountNumber:Number,
    bankIFSCCode:String,
    bankImage:String
})

const Admin=mongoose.model("AdminDetails",AdminSchema);

module.exports=Admin;