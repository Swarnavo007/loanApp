const User = require('../model/user');

const getUser=async (req,res,next)=>{
    try{
        const users=await User.find();
        return res.send(JSON.stringify(users));
    }
    catch(e){
        return res.status(400).json(e);
    }
}

const createUser = async(req,res,next)=> {
    try{
        const url = req.protocol + "://" + req.get("host");
        const user = new User({
            phoneNumber:req.body.phoneNumber,
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            address:req.body.address,
            emailID:req.body.emailID,
            sex:req.body.sex,
            pincode:req.body.pincode,
            employmentStatus:req.body.employmentStatus,
            choice:req.body.choice,
            adhaarCardNumber:req.body.adhaarCardNumber,
            panCardNumber:req.body.panCardNumber,
            bankDetails:req.body.bankDetails,
            selfPicture:url + "\\" + req.file.self[0],
            adhaarCardPicture:url + "\\" + req.file.adhaar[0],
            panCardPicture:url + "\\" + req.file.pan[0],
            bankPassbookPicture:url + "\\" + req.file.bankPass[0],
            date:Date.now()
        });
        await user.save();
        return res.status(201).json(user);
    }
    catch(e){

        return res.status(500).json(e);
    } 
}

const getUserByName = async(req,res,next) => {
    let userName= req.body.firstName;
    try{
        const users = await User.find({firstName:userName});
        return res.status(200).json(users);
    }
    catch(e){
        return res.status(500).json(e);
    }
}

const getUserByPhoneNumber = async(req,res,next) => {
    let userPhoneNumber= req.body.phoneNumber;
    try{
        const users = await User.find({phoneNumber:userPhoneNumber});
        return res.status(200).json(users);
    }
    catch(e){
        return res.status(500).json(e);
    }
}

module.exports={
    getUser,
    createUser,
    getUserByName,
    getUserByPhoneNumber
}