const Admin = require('../model/admin');

const getAdmin=async (req,res,next)=>{
    try{
        const admin=await Admin.find();
        return res.send(JSON.stringify(admin));
    }
    catch(e){
        return res.status(400).json(e);
    }
}

const createAdmin = async(req,res,next)=> {
    try{
        const admin = new Admin({
            bankAccountname:req.body.bankAccountname,
            bankAccountNumber:req.body.bankAccountNumber,
            bankIFSCCode:req.body.bankIFSCCode,
        })
        await admin.save();
        return res.status(201).json(admin);
    }
    catch(e){
        return res.status(500).json(e);
    }
}

const updateAdminById = async(req,res,next) => {
    try{
        const id = req.body.id;
        const updateAdmin = {
            bankAccountname:req.body.bankAccountname,
            bankAccountNumber:req.body.bankAccountNumber,
            bankIFSCCode:req.body.bankIFSCCode
        }
        await Admin.findOneAndUpdate({ _id: id }, updateAdmin);
        return res.json({ msg: "Data updated Successfully" });
    }
    catch(e) {
        return res.status(400).json(err);
    }
}

module.exports = {
    getAdmin,
    createAdmin,
    updateAdminById
}