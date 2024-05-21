import mongoose from "mongoose";

const administrationSchema = new mongoose.Schema({
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

const administrationModel = mongoose.model("administration",administrationSchema);

export default administrationModel;