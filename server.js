const { default: mongoose } = require("mongoose");
const app = require('./app');
const dotenv = require('dotenv');

dotenv.config()
// Database Connection

const connectionToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDB connected : ${mongoose.connection.host}`);
    } catch (error) {
        console.log(`Error Connection To MongoDB ${error}`);
    }
}


// Start app 

const startServer = () => {
    const port = process.env.PORT || 4003
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    })
}

const run = async () => {
    await connectionToDB()
    startServer()
}
run()