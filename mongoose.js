var mongoose=require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://Admin:Admin1608@clusterhz.cpp55.mongodb.net/mydb');
console.log("mongodb connect...")
module.exports=mongoose;