import userModel from "../models/users.js";
import hotelManagerModel from "../models/hotelManager.js";
import administrationModel from "../models/administration.js";
import bcrypt from "bcrypt";
import  jwt from "jsonwebtoken";

const authController = {
    login: async (req,res)=>{
        try{
            const {email,password} = req.body
            const user = await userModel.findOne({email})
            if(user)
            {
                const checkLogin = await bcrypt.compare(password , user.password )
                if(checkLogin)
                {
                    const token = jwt.sign({user},"asadweacasd23321qeqafasd",{
                        algorithm: "HS256"
                    })
                 
                    return res.status(200).json({ success: true, message: "Login Successfully" , token: token });
                }
                else
                {
                    return res.status(201).json({ success: true, message: "Invalid Credentials" });

                }

            }
            else
            {
                return res.status(400).json({ success: true, message: "Invalid Credentials" });
            }
        }
        catch(e)
        {
            console.log(e,"getting Error");
        }
    },
    HotelManagerlogin: async (req,res)=>{
        try{
            const {email,password} = req.body
            const hotelManager = await hotelManagerModel.findOne({email})
            if(hotelManager)
            {
                const checkLogin = await bcrypt.compare(password , hotelManager.password )
                if(checkLogin)
                {
                    const token = jwt.sign({hotelManager},"asadweacasd23321qeqafasd",{
                        algorithm: "HS256"
                    })
                 
                    return res.status(200).json({ success: true, message: "Login as a Hotel Manager Successfully" , token: token });
                }
                else
                {
                    return res.status(201).json({ success: true, message: "Invalid Credentials" });

                }

            }
            else
            {
                return res.status(400).json({ success: true, message: "Invalid Credentials" });
            }
        }
        catch(e)
        {
            console.log(e,"getting Error");
        }
    },
    administrationLogin: async (req,res)=>{
        try{
            const {email,password} = req.body
            const administration = await administrationModel.findOne({email})
            if(administration)
            {
                const checkLogin = await bcrypt.compare(password , administration.password )
                if(checkLogin)
                {
                    const token = jwt.sign({administration},"asadweacasd23321qeqafasd",{
                        algorithm: "HS256"
                    })
                 
                    return res.status(200).json({ success: true, message: "Login as a Administration Successfully" , token: token });
                }
                else
                {
                    return res.status(201).json({ success: true, message: "Invalid Credentials" });

                }

            }
            else
            {
                return res.status(400).json({ success: true, message: "Invalid Credentials" });
            }
        }
        catch(e)
        {
            console.log(e,"getting Error");
        }
    },
}

export default authController