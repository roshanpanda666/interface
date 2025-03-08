import mongoose from "mongoose";

const datamodel=new mongoose.Schema({
    button:String
})

export const DATA=mongoose.model.dataas || mongoose.model("dataas",datamodel)