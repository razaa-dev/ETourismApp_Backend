import hotelManagersModel from "../models/hotelManager.js";
import bcrypt from "bcrypt";

const hotelManagerController = {
    getAll: async (req,res)=>{
        try{

            const hotelsManagers = await hotelManagersModel.find()
            return res.status(200).json({ success: true, data: hotelsManagers });
        }
        catch(e)
        {
            console.log("getting Error");
        }
    },
    getOneById: async (req,res)=>{
        const id = req.params.id;
        try{
            const hotelManager = await hotelManagersModel.findById(id)
            if(hotelManager)
            {
                return res.status(200).json({ success: true, data: hotelManager });
            }
            else
            {
                return res.status(400).json({ success: false, message: "No Hotel Found" });
            }
        }
        catch(e)
        {
            return res.status(400).json({ success: false, message: "HotelManagerId is Wrong" });
        }
    },
    create: async (req, res) => {
        const { name, email, password } = req.body;
    
        try {
            // Check if the email already exists
            const existingHotelManager = await hotelManagersModel.findOne({ email });
            if (existingHotelManager) {
                return res.status(400).json({ success: false, message: "Hotel manager with this email already exists" });
            }
    
            const hashPassword = await bcrypt.hash(password, 12);
            const newHotelManager = await hotelManagersModel.create({ name, email, password: hashPassword });
    
            if (newHotelManager) {
                return res.status(200).json({ success: true, message: "Hotel Manager Account Created Successfully" });
            } else {
                return res.status(400).json({ success: false, message: "Hotel Manager User Creation Error" });
            }
        } catch (e) {
            return res.status(400).json({ success: false, message: "Something Went Wrong" });
        }
    },
    update: async (req,res)=>{
        const id = req.params.id;
        const data = req.body;
        try{
            const hotelManager = await hotelManagersModel.findByIdAndUpdate(id,data)
            if(hotelManager)
            {
                return res.status(200).json({ success: true, message: "Hotel Manager Data Updated Successfully", data: hotelManager });
            }
            else
            {
                return res.status(400).json({ success: false, message: "No Hotel Manager Found" });
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
            const hotelManager = await hotelManagersModel.findByIdAndRemove(id)
            if(hotelManager)
            {
                return res.status(200).json({ success: true, message: "Hotel Manager Data Deleted Successfully", data: hotelManager });
            }
            else
            {
                return res.status(400).json({ success: false, message: "No Hotel Manager Found" });
            }
        }
        catch(e)
        {
            return res.status(400).json({ success: false, message: "Something Went Wrong" });
        }
    },
}

export default hotelManagerController