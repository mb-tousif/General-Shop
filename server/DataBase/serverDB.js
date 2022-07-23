import mongoose from "mongoose";

const connection = async () => {
    const url = `mongodb+srv://${process.env.MongoDB_User}:${process.env.MongoDB_Password}@ecommerce-web.9v0pf.mongodb.net/Ecommerce-web?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log("DB connected");
    } catch (error) {
        console.log("Error while connecting with DB", error.message);
    }
}

export default connection