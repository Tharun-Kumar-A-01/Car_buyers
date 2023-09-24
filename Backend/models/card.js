const mongoose = require("mongoose");

const UserDetailsSchema = new mongoose.Schema(
    {
        companyname: String,
        modelname: String,
        year: String,
        amount: String,
    },
    {
        collection: "CarInfo",
    }
);

mongoose.model("CarInfo", UserDetailsSchema);