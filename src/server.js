const express = require("express");
const { json } = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());
app.use(express.urlencoded({extended: true}))

const classrouter = require('./router/routes')
app.use('/api', classrouter)

app.get("/api", (req, res) => {
	res.status(200).json({ message: "Server initialized" });
});

app.listen(PORT, () => {
	console.log(`Server running on PORT ${PORT}`);
});
