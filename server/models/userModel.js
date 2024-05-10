import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        'https://cdn.pixabay.com/photo/2017/02/18/19/20/logo-2078018_1280.png',
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
