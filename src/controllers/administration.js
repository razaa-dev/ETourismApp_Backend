import administrationModel from "../models/administration.js";
import bcrypt from "bcrypt";

const administrationController = {
    getAll: async (req,res)=>{
        try{

            const administrations = await administrationModel.find()
            return res.status(200).json({ success: true, data: administrations });
        }
        catch(e)
        {
            console.log("getting Error");
        }
    },
    getOneById: async (req,res)=>{
        const id = req.params.id;
        try{
            const administration = await administrationModel.findById(id)
            if(administration)
            {
                return res.status(200).json({ success: true, data: administration });
            }
            else
            {
                return res.status(400).json({ success: false, message: "No Administration Account Found" });
            }
        }
        catch(e)
        {
            return res.status(400).json({ success: false, message: "Administration Account ID is Wrong" });
        }
    },
    create: async (req, res) => {
        const { name, email, password } = req.body;
    
        try {
            // Check if the email already exists
            const existingadministration = await administrationModel.findOne({ email });
            if (existingadministration) {
                return res.status(400).json({ success: false, message: "Administration Account with this email already exists" });
            }
    
            const hashPassword = await bcrypt.hash(password, 12);
            const newadministration = await administrationModel.create({ name, email, password: hashPassword });
    
            if (newadministration) {
                return res.status(200).json({ success: true, message: "Administration Account Created Successfully" });
            } else {
                return res.status(400).json({ success: false, message: "Admin User Creation Error" });
            }
        } catch (e) {
            return res.status(400).json({ success: false, message: "Something Went Wrong" });
        }
    },
    update: async (req,res)=>{
        const id = req.params.id;
        const data = req.body;
        try{
            const administration = await administrationModel.findByIdAndUpdate(id,data)
            if(administration)
            {
                return res.status(200).json({ success: true, message: "Administration Data Updated Successfully", data: administration });
            }
            else
            {
                return res.status(400).json({ success: false, message: "No Admin User Found" });
            }
        }
        catch(e)
        {
            return res.status(400).json({ success: false, message: "Something Went Wrong" });
        }
    },
    delete: async (req,res)=>{
        const id = req.params.id;
        try{
            const administration = await administrationModel.findByIdAndRemove(id)
            if(administration)
            {
                return res.status(200).json({ success: true, message: "Administration Data Deleted Successfully", data: administration });
            }
            else
            {
                return res.status(400).json({ success: false, message: "No Admin User Found" });
            }
        }
        catch(e)
        {
            return res.status(400).json({ success: false, message: "Something Went Wrong" });
        }
    },
}

export default administrationController