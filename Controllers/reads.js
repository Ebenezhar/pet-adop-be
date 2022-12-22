const Pets = require('../Schema/PetData')
const readDogs = async (req, res) => {
    try {
        const result = await Pets.find({ lookfor: "giveaway", inputVar: `${req.params.type}` });
        res.status(200).send(result);
    } catch (error) {
        console.log(error);
    }
}



module.exports = { readDogs }