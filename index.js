const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded());

app.get("/users", (req, res)=>{
    res.send(
        {
        "name": "gihan"
        },
        {
            "name": "tharusha"
        },
    )
})

app.listen(5000, ()=>console.log("Server is running"));