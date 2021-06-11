const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');


const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});

UserSchema.plugin(passportLocalMongoose);
// THIS IS GOING TO ADD A USERNAME AND PASSWORD TO OUR USER

module.exports = mongoose.model('User', UserSchema);