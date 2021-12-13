const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    profile_photo_url: {type: String, required: false},
    roles: [{type: String, required: true}]
},{
    versionKey: false,
    timestamps: true
});


userSchema.pre('save', function(next) {
    if(!this.isModified('password')) return next();

    const hashPassword = bcrypt.hashSync(this.password, 12);
    // console.log(hashPassword);
    this.password = hashPassword;

    next();
});


userSchema.methods.checkPassword = function(password) {
    const hashPassword = this.password;

    return new Promise(function(resolve, reject) {
        bcrypt.compare(password, hashPassword, function(err, same) {
            if(err) return reject(err);
    
            return resolve(same);
        });
    })

    
}

const User = model('user', userSchema);

module.exports = User;