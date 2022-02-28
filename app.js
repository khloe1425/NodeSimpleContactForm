const express = require("express");
const cors = require("cors");
const { formRouter } = require("./routers/formRouters");
const { errorHandle } = require("./middleware/errorHandle");
const app = express();
app.use(express.json())
app.use(cors())
app.use("/form", formRouter);

app.use(errorHandle)

app.listen(7000, () => {
    console.log("Server in running on port 7000");
})