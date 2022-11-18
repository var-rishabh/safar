const axios = require('axios');
const monument = require('../monuments.json')
module.exports.getMonuments = async (req, res) => {
    try {
        let states;
        let monuments = monument
        states = await axios.get("https://api.jsonserve.com/rPpMIb")
        
        res.render('monuments', { x: states.data, y: monuments});
    } catch (err) {
        return res.status(400).json({
            status: 'failure',
            message: err.message,
            data: null
        });
    }
}

module.exports.getMonument = async (req,res) =>{
    try{
        const monuments=monument;
        const City = req.body.cityName;
        console.log(City)
        const myObj2 = JSON.stringify(monuments);
        const myObj = JSON.parse(myObj2);
        const reqMonument= myObj[City]
        console.log(reqMonument)
        return res.status(200).json({
            status: 'success',
            data: reqMonument
        });

    } catch(err){
        return res.status(400).json({
            status: 'failure',
            message: err.message,
            data: null
        });
    }
}

module.exports.bookMonument = async (req, res) => {
    try {
        const name = req.params.monumentName;
        res.render('book', { monument_name: name });
    } catch (err) {
        return res.status(400).json({
            status: 'failure',
            message: err.message,
            data: null
        });
    }
}