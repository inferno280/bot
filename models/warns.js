const mongoose = require('mongoose')
let Schema = new mongoose.Schema({
    warns: Array ,
    User: String,
    Guild: String
});
module.exports=mongoose.model("warns",Schema)