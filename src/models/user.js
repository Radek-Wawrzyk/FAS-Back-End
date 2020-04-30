import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const User = mongoose.Schema({
  login: String,
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
  },
});

User.plugin(passportLocalMongoose, { usernameField: 'login' });
export default mongoose.model('User', User, 'users');