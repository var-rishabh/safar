const mongoose = require('mongoose')


const connectWithDb = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`DB GOT CONNECTED`);
    } catch (error) {
        console.log(`DB CONNECTION ISSUES`);
        console.log(error)
        process.exit(1);
    }
}


module.exports = connectWithDb