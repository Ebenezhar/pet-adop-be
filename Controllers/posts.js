const Pets = require('../Schema/PetData')

const postpetdata = async (req, res) => {
    try {
        const user = await Pets.create(req.body);
        console.log(user._id);
        if (user._id) {
            res.status(200).send({ message: `Your ${user.inputVar} profile has been created successfully...` })
        }

    } catch (error) {
        console.log(error)
    }
}




module.exports = { postpetdata }