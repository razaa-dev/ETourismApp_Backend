import mongoose from "mongoose";

const hotelManagersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
},{timestamps: true})

const hotelManagersModel = mongoose.model("hotels",hotelManagersSchema);

export default hotelManagersModel;