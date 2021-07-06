import mongoose from 'mongoose';
const {Schema} = mongoose;

const userSchema = new Schema({
    "source": Object,
    "source_type": String,
    "action": String,
    "influencer": String
});

export const User = mongoose.model('User', userSchema);