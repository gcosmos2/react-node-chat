const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {

    const response = await  axios.put("https://api.chatengine.io/users/",
    {username:username,secret:username,first_name:username},
    {headers:{"private-key":"cf850eac-28f9-41a6-ae31-c9c53036d0ea"}});
    console.log("put invoked")

    return res.status(response.status).json(response.data)



    
  } catch (error) {
    return res.status(error.response.status).json(error.response.data)
    
  }
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);