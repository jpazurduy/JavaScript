const mongoose = require("mongoose")

const uri = "mongodb+srv://jpazurduy:Control123!@clusterazurduy.iy9wo.mongodb.net/?retryWrites=true&w=majority&appName=ClusterAzurduy"
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

const connectDB = async () => {
    try {
        // await mongoose.connect(uri, {
        //     useNewURLParser: true,
        //     useUnifiedTopology: true
        // });

        await mongoose.connect(uri, clientOptions);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("MongoDB is connected successfully.")
        
    } catch (error) {
        console.error("MongoDB error connection problem.")
    } finally {
        await mongoose.disconnect();
    }
}

module.exports = connectDB