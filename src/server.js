
const app = require("./index.js");
const connect = require("./configs/db");

app.listen(5000, async () => {
    try
    {
        await connect();
        console.log("Listening to port 5000");
    }
    catch(err)
    {
        console.error({error : err.message});
    }
    ;
});