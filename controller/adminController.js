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
        const url = req.protocol + "://" + req.get("host");
        const user = new Admin({
            bankAccountname:req.body.bankAccountname,
            bankAccountNumber:req.body.bankAccountNumber,
            bankIFSCCode:req.body.bankIFSCCode,
            bankImage:url + "\\" + req.file.path
        })
    }
    catch(e){
        return res.status(500).json(e);
    }
}

const updateAdminById = async(req,res,next) => {
    try{
        const id = req.body.id;
        const url = req.protocol + "://" + req.get("host");
        const updateAdmin = {
            bankAccountname:req.body.bankAccountname,
            bankAccountNumber:req.body.bankAccountNumber,
            bankIFSCCode:req.body.bankIFSCCode
        }
        if (req.file) {
            updateAdmin.bankImage = url + "\\" + req.file.path;
            previousImage = await Product.findOne({ _id: id });
            previousImageFile = previousImage.bankImage;
            var index = previousImageFile.indexOf("uploads");
            await fs.unlink(previousImageFile.slice(index), function (err) {
              if (err) throw err;
              console.log("File deleted!");
            });
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