const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    profile_photo_url: {type: String, required: true},
    roles: [{type: String, required: true}]
},{
    versionKey: false,
    timestamps: true
});


userSchema.pre('save', function(next) {
    if(!this.isModified('password')) return next();

    bcrypt.hash(this.password, 12, function(err, hash) {
        if(err) throw err;

        this.password = hash;
        next();
    });
});


userSchema.methods.checkPassword = (password) =>{
    const hashPassord = this.password;

    bcrypt.compare(password, hashPassword, function(err, same) {
        if(err) throw err;

        return same;
    });
}

const User = model('user', userSchema);

module.exports = User;