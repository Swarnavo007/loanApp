const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({

    phoneNumber:{type:Number},
    firstName:{type:String},
    lastName:{type:String},
    address:{type:String},
    emailID:{type:String},
    sex:{type:String},
    pincode:{type:Number},
    employmentStatus:{type:String},
    choice:{
        amount:Number,
        tenurePeriod:Number
    },
    adhaarCardNumber:{type:Number},
    panCardNumber:{type:Number},
    bankDetails:{
        bankIFSC:String,
        bankAccountNumber:Number,
        bankAccountName:String
    },
    selfPicture:{type:String},
    adhaarCardPicture:{type:String},
    panCardPicture:{type:String},
    bankPassbookPicture:{type:String},
    date:{type:Date}
})

const User=mongoose.model("UserDetails",UserSchema);

module.exports=User;