const path = require("path");

const init = async() => {
    const sequelize = require(path.join(process.cwd(), "src/config/lib/sequelize"));

    sequelize.query("CREATE DATABASE IF NOT EXISTS todo", (err, result) => {
        if(err) {
            console.log(err);
        } else {
            console.log(result);
        }
    });

    // import model 
    const user = require(path.join(process.cwd(), "src/modules/user/user.model"));

    try{
        await sequelize.sync();
        console.log("success")
    } catch (err) {
        console.log(err);
    }
}

init();