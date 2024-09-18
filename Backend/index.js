const express = require("express");
const cors = require("cors");
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;


const url = "https://api.weatherapi.com/v1/current.json?key="
const API_KEY = process.env.API_KEY;

app.use(express.json());
app.use(cors());

app.post("/weather", async function(req,res){
    const {city} = req.body;
    const response = await fetch(`${url}${API_KEY}&q=${city}&aqi=yes`);
    const data = await response.json();

    const final = {
        city : data.location.name,
        country : data.location.country,
        temp : data.current.temp_c,
        iconURL : data.current.condition.icon
    }
    console.log(final);

    res.json({
        data : final
    })
})

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})