const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
        const respuesta = await axios.put(
            'https://api.chatengine.io/users/',
            {username: username, secret: username, firts_name: username},
            {headers: {"Private-Key": "eadbd1fd-9629-4896-8224-924b2c3b6306"}}
        )
        return res.status(respuesta.status).json(respuesta.data);
    } catch (e) {
       return res.status(e.response.status).json(e.response.data)
    }
    
    return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);