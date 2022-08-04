const User = require("./user.model");

module.exports.getUsers = async (req, res) => {
    try{
        const users = await User.findAll();
        res.send(users);
    } catch(err) {
        console.log(err);
    };
};

module.exports.createUser = async (req, res) => {
    const { email, fullName, password, phone, gander } = req.body;
    const newUser = {
        email,
        fullName,
        password,
        phone,
        gander
    };

    try{
        const user = await User.findOne({ where: { email } });

        if(user) {
            res.send("Already have an account.");
        } else {
            await User.create(newUser);
            res.send("User create succesfully.");
        }
    } catch(err) {
        console.log(err);
    }
}