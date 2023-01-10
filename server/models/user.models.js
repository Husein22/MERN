const mongo=require('mongoose');

const User=new mongo.Schema({
    name: { type: String, required: true },
		email: { type: String, required: true, unique: true,unique:true },
		password: { type: String, required: true },
		quote: { type: String },
},
{collection:"user-data"}
)

const model=mongo.model("UserData",User);

module.exports=model;


