module.exports.start = () => {
    const app = require("./express")();

    const port = 5000;
    
    app.listen(port, () => {
        console.log(`Listening on port ${port}...`);
    })
}