import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://abdul:468AVqD6eGYrgjbS@cluster0.xtz4c.mongodb.net/munch')
    .then(()=>console.log("DB Connected"));
}