const { mongoose } = require("mongoose")

const dbConnect = () => {
    try {
        const conn = mongoose.connect('mongodb+srv://abdallahhossam847:P0aBZemW53wUpzBn@cluster1.n1vs5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1', { useNewUrlParser: true, useUnifiedTopology: true,connectTimeoutMS: 30000 });
        console.log("Database is connected Succesfully");
    } catch (error) {
        console.log("Database Error");
    }

};
module.exports = dbConnect;