let mongoose = require('mongoose')

let memberModel = new mongoose.Schema({
  regNo: {type:String, unique:true},
  name: String,
  faculty: {type:String, default:"Science"},
  email:{type:String, unique:true},
  dateJoined:Date
})

module.exports = mongoose.model('Member', memberModel)