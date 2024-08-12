const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");
const port = 8182;

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));


app.get("/xxx", (req, res) => {
  res.send('<h1> hello</h1>');
});

app.post("/login", async (req, res) => {
  console.log(req.body); // Log request body
  const { username } = req.body;
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-Key": "c3981576-3845-4ac5-b893-ecce6ee9a880" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});